const express = require('express');
const router = express.Router();
const {getMessageObject} = require('../utils/messageUtils');
const RegisterController = require('../controller/RegisterController');
const registerController = new RegisterController();
const message = null

router.get('/register', (req, res) => { res.render('cadastro/cadastro', {message})});

router.post('/register', (req, res) => registerController.registerUser(req, res));

module.exports = router;