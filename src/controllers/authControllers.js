const authControllers = {
    authToLogin: (req, res) => res.send('Route log in View'),
    authLogin: (req, res) => res.send('Route when you are log in View'),
    authRegister: (req, res) => res.send('Route for register View'),
    adminEdit:(req, res) => res.send('Route for edit an item View'),
    authRegisterOK: (req, res) => res.send('Route to confirm a register View'),
    authLogout: (req, res) => res.send('Route to log out item')
}

module.exports = authControllers;