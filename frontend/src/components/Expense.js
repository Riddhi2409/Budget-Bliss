import React,{useEffect} from 'react';
import IncomeItem from './IncomeItem';
import ExpenseForm from './ExpenseForm';
import { useGlobalContext } from '../context/globalContext';
import Income from './Income';

function Expense() {
  const {addIncome,expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext();
  useEffect(()=>{
    getExpenses()
  },[])
  return (
    <div className='flex flex-col gap-3 my-10 mx-4 w-full overflow-x-hidden z-10'>
      <h1 className=' text-2xl font-bold text-[#222260]'>Expenses</h1>
      <div className='h-[4em] bg-white w-full rounded-2xl shadow-lg flex items-center justify-center text-lg font-semibold text-[#222260] gap-2'>
        <h1>Total Expense: </h1>
        <h1 className='text-2xl text-red-600 font-bold'>${totalExpenses()}</h1>
      </div>
      <div className='flex lg:flex-row flex-col gap-3 w-full'>
        <ExpenseForm />
        <div className='flex flex-col w-full gap-3'>
          {expenses.length === 0 && <p className='bg-[#FCF6F9] text-[#222260] text-xl text-center font-medium p-2 rounded-xl'>No Transactions</p>}
          {expenses.map((Income)=>{
            const {_id, title, amount, date, category, description, type} = Income;

            return  <div key={_id}>
            <IncomeItem  title={title} date={date} category={category} description={description} type={"expenses"} deleteItem={deleteExpense} _id={_id} amount={amount}/>
            </div>
          })}
        
        </div>
      </div>

    </div>
  )
}

export default Expense
