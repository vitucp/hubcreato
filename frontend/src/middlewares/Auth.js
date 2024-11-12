const jwt = require('jsonwebtoken');
const axios = require('axios');
const { getMessageObject } = require('../utils/messageUtils');
const baseURL = 'http://127.0.0.1:3333'

async function authenticateToken(req, res, next) {
    const token = req.session.user && req.session.user.token;

    if (!token) {
        const message = getMessageObject('danger', 'Entre com seu login.');
        return res.render('login/login', { message });
    }

    try {
        const response = await axios.post(`${baseURL}/refresh-token`, {
            token: token,
        });

        const { dataUser, token: newToken } = response.data;

        if (!newToken) {
            throw new Error('Novo token não recebido');
        }

        req.session.user.token = newToken;
        req.session.user.dataUser = dataUser;

        req.user = dataUser;

        next();
    } catch (err) {
        const message = getMessageObject('danger', 'Entre com seu login.');

        if (err.response && err.response.status === 403) {
            return res.render('login/login', { message: 'Token inválido ou expirado.' });
        }

        console.error('Erro ao verificar o token:', err);
        return res.render('login/login', { message });
    }
}

module.exports = authenticateToken;
