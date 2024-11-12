const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');
const authController = new AuthController();
const {getMessageObject} = require('../utils/messageUtils');

const message = null

router.get('/login', (req, res) => { res.render('login/login', {message})});

router.get('/', (req, res) => { res.render('login/login', {message})});

router.post('/login', (req, res) => authController.login(req, res));

router.get('/logout', (req, res) => authController.logout(req, res));


module.exports = router;