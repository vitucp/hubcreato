const Route = use('Route')

const AuthController = use('App/Controllers/Http/AuthController.js');

Route.post('/', 'AuthController.login');
Route.post('/login', 'AuthController.login');
Route.post('/register', 'AuthController.register');

