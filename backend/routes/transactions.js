const { addExpense, getExpense, deleteExpense } = require('../controllers/Expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


router.post('/add-income', addIncome)
    .post('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .post('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router