const IncomeSchema= require("../models/Income.models")

exports.addIncome = async(req,res)=>{
    const {title, amount, category, description, date,emailId}  = req.body

    const income =  IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        emailId
    });

    try {
        //validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

}

exports.getIncomes = async (req, res) =>{
    const {emailId} = req.body;
    try {
        const incomes = await IncomeSchema.find({emailId}).sort({date: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}