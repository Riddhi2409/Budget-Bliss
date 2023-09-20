import React,{useEffect} from 'react'
import { useGlobalContext } from '../context/globalContext';
import IncomeItem from './IncomeItem';

function Transactions() {
    const {getExpenses,getIncomes,transactionHistory,deleteExpense,deleteIncome} = useGlobalContext();
    const history = transactionHistory();
    useEffect(()=>{
        getExpenses();
        getIncomes();
    },[])
  return (
    <div className='flex flex-col gap-6 w-full m-4 py-6 px-3 overflow-x-hidden z-10'>
        <h1 className='text-xl text-[#222260] font-bold'>All Transactions History</h1>
        <div className='flex flex-col gap-3 '>
        {history.length === 0 && <p className='bg-[#FCF6F9] text-[#222260] text-xl text-center font-medium p-2 rounded-xl'>No Transactions</p>}
      {history.map((Income)=>{
            const {_id, title, amount, date, category, description, type} = Income;

            return  <div key={_id}>
            <IncomeItem  title={title} date={date} category={category} description={description} type={type} deleteItem={type==='income' ? deleteIncome : deleteExpense} _id={_id} amount={amount}/>
            </div>
          })}
          </div>
    </div>
  )
}

export default Transactions
