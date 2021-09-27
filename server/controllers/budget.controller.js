const Budget = require('../models/budget.model.js');

exports.create = (req, res) => {
    console.log(req.body);
    // Create a Budget
    const budget = new Budget({
        food: req.body.food
    });

    // Save Budget in the database
    budget.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Budget."
        });
    });
};

// Retrieve and return all budgets from the database.
exports.findAll = (req, res) => {
    Budget.find()
    .then(budget => {
        res.send(budget);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
