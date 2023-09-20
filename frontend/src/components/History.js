import React,{useEffect} from 'react';
import { useGlobalContext } from '../context/globalContext';
import List from './List'

function History() {

    const {transactionHistory} = useGlobalContext();

    const history=transactionHistory().slice(0,3);

  return (
    <div className='flex flex-col gap-3 '>
      {history.length === 0 && <p className='bg-[#FCF6F9] text-[#222260] text-xl text-center font-medium p-2 rounded-xl'>No Transactions</p>}
      {history.map((income)=>{
         const {_id, title, amount, date, category, description, type} = income;
         return <div key={_id}>
          <List title={title} amount={amount} date={date} category={category} description={description} type={type} _id={_id}/>
          </div>
      })}
    </div>
  )
}

export default History
