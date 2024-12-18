const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); 

const PORT = process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({
  secret: 'hhajsdkkkkkasdi',  // usar env depois 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }  
}));

// Rotas
const LoginRouter = require('./routers/LoginRouter');
const RegisterRouter = require('./routers/RegisterRouter')

app.use('/', LoginRouter);
app.use('/', RegisterRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
