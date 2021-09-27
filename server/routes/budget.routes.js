module.exports = (app) => {
    const budget = require('../controllers/budget.controller.js');

    // Create a new Budget
    app.post('/budget', budget.create);

    // Retrieve all Budgets
    app.get('/budget', budget.findAll);
}