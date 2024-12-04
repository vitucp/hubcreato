const prisma = require("../../../prisma/prisma");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {

    async login({request, response}){
        try {
          const  {email, password} = request.all()
          const user = await prisma.user.findUnique({
            where: {email}
          });
          
          if (!user || !(await bcrypt.compare(password, user.password))) { 
            return response.status(401).json({ message: 'Invalid credentials' });
          }

          const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          const {id, name} = user;

          return response.json({token , id, name});

        } catch (error) {
            console.error(error);
            return response.status(500).json({ message: 'Internal server error' });
        }
    }

    async register({request, response}){
        const  {name, lastName, whatsApp, bithDate, email, password} = request.all()

        if(!name, !lastName, !whatsApp, !bithDate, !email, !password){
          return response.status(400).json({message: 'Required Fields are missing'});
        }
        try {
 
          const existingUser = await prisma.user.findUnique({
            where: {email}
          })

          if(existingUser){
            return response.status(400).json({message: 'Email already in use'})
          }
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          const user = await prisma.user.create({
            data: {
                name,
                lastName,
                whatsApp,
                bithDate, 
                email,
                password: hashedPassword
            }
          });
         
          const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

          return response.json({token}); 

        } catch (error) {
          console.log('ERRO: ', error)
          return response.status(500).json({ message: 'Internal server error' });
        }
    }

}

module.exports = AuthController
