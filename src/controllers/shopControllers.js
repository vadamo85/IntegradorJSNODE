const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'),
    shopItem: (req, res) => res.send('Route for item from ID View'),
    shopAddItem: (req, res) => res.send('Route for add the item from ID into the cart View'),
    shopCart:(req, res) => res.send('Route for Cart View'),
    shopPayCart: (req, res) => res.send('Route for pay the cart View')
}

module.exports = shopControllers;