const axios = require('axios');
const baseURL = process.env.BASE_URL;
const { getMessageObject } = require('../utils/messageUtils');

class RegisterController {

    async registerUser(req, res) {
        try {
            console.log('teste: ', req.body);
            const { firstname, lastname, email, birthday, whatsapp, password, confirm_password } = req.body;

            // Verificação dos campos obrigatórios
            if (!firstname || !lastname || !email || !birthday || !whatsapp || !password || !confirm_password) {
                let message = getMessageObject('danger', 'Todos os campos precisam ser preenchidos.');
                return res.render('cadastro/cadastro', { message });
            }

            // Verificação se a senha e a confirmação são iguais
            if (password !== confirm_password) {
                let message = getMessageObject('danger', 'As senhas não coincidem.');
                return res.render('cadastro/cadastro', { message });
            }

            // Dados a serem enviados para a API
            const data = {
                name: firstname,
                lastName: lastname,
                whatsApp: whatsapp,
                birthDate: birthday,
                email,
                password
            };

            // Enviando dados para a API
            //const token = req.session.user?.token; register
            const response = await axios.post(`${baseURL}/register`, data);

            // Verificando a resposta da API
            if (response.status === 201) { // Supondo que 201 seja o status para criação bem-sucedida
                let message = getMessageObject('success', 'Usuário cadastrado com sucesso!');
                return res.render('cadastro/success', { message });
            } else {
                let message = getMessageObject('danger', 'Erro ao cadastrar usuário.');
                return res.render('cadastro/cadastro', { message });
            }

        } catch (error) {
            console.error('Erro ao criar usuário:', error.message);
            let message = getMessageObject('danger', 'Erro ao cadastrar');
            return res.render('cadastro/cadastro', { message });
        }
    }
}

module.exports = RegisterController;
