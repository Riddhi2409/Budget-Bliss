import React,{useEffect} from 'react'
import Form from './Form'
import IncomeItem from './IncomeItem'
import { useGlobalContext } from '../context/globalContext'

function Income() {
  const {incomes,getIncomes,deleteIncome,totalIncome} = useGlobalContext();

  useEffect(()=>{
    getIncomes();
  },[])

  return (
    <div className='flex flex-col gap-3 my-10 mx-4 w-full h-full overflow-x-hidden z-10'>
      <h1 className=' text-2xl font-bold text-[#222260]'>Incomes</h1>
      <div className='h-[4em] bg-white w-full rounded-2xl shadow-lg flex items-center justify-center text-lg font-semibold text-[#222260] gap-2'>
        <h1>Total Income: </h1>
        <h1 className='text-2xl text-green-500 font-bold'> ${totalIncome()}</h1>
      </div>
      <div className='flex lg:flex-row flex-col gap-3'>
        <Form />
        <div className=' flex flex-col w-full gap-3'>
        {incomes.length === 0 && <p className='bg-[#FCF6F9] text-[#222260] text-xl text-center font-medium p-2 rounded-xl'>No Transactions</p>}
        {incomes.map((Income)=>{
            const {_id, title, amount, date, category, description, type} = Income;

            return  <div key={_id}>
            <IncomeItem  title={title} date={date} category={category} description={description} type={type} deleteItem={deleteIncome} _id={_id} amount={amount} />
            </div>
          })}
        </div>
      </div>

    </div>
  )
}

export default Income
