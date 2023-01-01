const routes = require('express').Router();
const usersController = require('./Controller/UserController');

// routes.get('/', (req, res) => {
//     res.send('Hello');
//     // res.redirect('/login');
// })

routes.post('/signup', usersController.addSignup_user);
routes.post('/login', usersController.addLogin_user);
routes.post('/addEmployee', usersController.addEmployee_data);

module.exports = routes;