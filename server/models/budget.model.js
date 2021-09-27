const mongoose = require('mongoose');

const BudgetSchema = mongoose.Schema({
    food: String
}, {
    timestamps: false
});

module.exports = mongoose.model('Budget', BudgetSchema);