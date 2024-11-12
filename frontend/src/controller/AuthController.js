const axios = require('axios');
const baseURL = "http://127.0.0.1:3333";
const { getMessageObject } = require('../utils/messageUtils');

class AuthController {

    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                const message = getMessageObject('danger', 'Entre com Email e Senha');
                return res.render('login/login', { message });
            }

            const response = await axios.post(`${baseURL}/login`, { email, password });

            const { token} = response.data;

            if (token) {
                 req.session.user = {
                     token,
                }

                return res.redirect('/home');
            } else {
                const message = getMessageObject('danger', 'Falha ao fazer login. Tente novamente.');
                return res.render('login/login', { message });
            }
        } catch (error) {
            let message;
            if (error.response && error.response.status === 401) {
                message = getMessageObject('danger', 'Credenciais inválidas. Tente novamente.');
            } else {
                message = getMessageObject('danger', 'Erro ao tentar logar, tente novamente mais tarde.');
            }

            console.error('Erro ao fazer login:', error.message);
            return res.render('login/login', { message });
        }
    }

    logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                console.error('Erro ao destruir a sessão:', err);
                return res.status(500).send('Erro ao deslogar.');
            }
            res.redirect('/login');
        });
    }
}

module.exports = AuthController;
