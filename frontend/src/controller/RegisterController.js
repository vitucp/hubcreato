const axios = require('axios');
const baseURL = "http://127.0.0.1:3333";
const { getMessageObject } = require('../utils/messageUtils');

class RegisterController{

    async registerUser(req, res) {
        try {
            console.log('teste: ', req.body)
            const {firstname, lastname, email, birthday, whatsapp, password, confirm_password} = req.body
           
            if(firstname, lastname, email, birthday, whatsapp, password, confirm_password){
                message = getMessageObject('danger', 'Todos os campos precisam ser preenchidos.');
                return res.render('cadastro/cadastro', {message})
            }
            const data =  { name: firstname, lastName: lastname, whatsApp: whatsapp, bithDate: birthday, email, password} 
            const response = await axios.post(`${baseURL}/register`, data);


        } catch (error) {
            console.log('Erro ao criar usuario login:', error);
            message = getMessageObject('danger', 'Erro ao cadastrar');
            return res.render('cadastro/cadastro', { message });
        }
    }

}

module.exports = RegisterController;