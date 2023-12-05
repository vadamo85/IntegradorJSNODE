const adminControllers = {
    admin: (req, res) => res.send('Route for Admin View'),
    adminItem: (req, res) => res.send('Route for item in stock View'),
    adminCreateItem: (req, res) => res.send('Route for add an item in stock View'),
    adminEdit:(req, res) => res.send('Route for edit an item View'),
    adminEditOK: (req, res) => res.send('Route to confirm changes in an item View'),
    adminDelete: (req, res) => res.send('Route to delete an item')
}

module.exports = adminControllers;