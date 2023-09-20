import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useGlobalContext } from '../context/globalContext';


function ExpenseForm() {
    const {addExpense, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category,description } = inputState;
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, amount, date, category,description } = inputState;
        addExpense(inputState)
        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
    }
 
  return (
    <div className='flex flex-col gap-2 lg:min-w-[18em] max-lg:w-full'>
        {error && <p className='text-red-500'>{error}</p>}
        <form className='flex flex-col gap-5 items-end w-full'>
            <div className='w-full'>
            <input 
                    type="text" 
                    value={title}
                    name={'title'}  
                    placeholder="Expense Title"
                    onChange={handleInput('title')}
                    className='w-full h-[2em] px-2 border-[0.2em] placeholder-gray-500  border-white bg-transparent text-[#222260] font-medium'
                />
            </div>
            <div className="w-full ">
                <input value={amount}  
                    type="text" 
                    name={'amount'} 
                    placeholder={'Expense Amount'}
                    onChange={handleInput('amount')} 
                    className='w-full h-[2em] px-2 border-[0.2em] placeholder-gray-500  border-white bg-transparent text-[#222260] font-medium'
                />
            </div>
            <div className="w-full ">
                <DatePicker 
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                    className='lg:w-[18em]  h-[2em] px-2 border-[0.2em] placeholder-gray-500  border-white bg-transparent text-[#222260] font-medium'
                    
                />
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}
                className=' h-[2em] px-2 border-[0.2em] placeholder-gray-500  border-white bg-transparent text-[#222260] font-medium'>
                     <option value="" disabled >Select Option</option>
                    <option value="education">Education</option>
                    <option value="groceries">Groceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>  
                    <option value="travelling">Travelling</option>  
                    <option value="other">Other</option>    
                </select>
            </div>
            <div className="input-control w-full">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}
                className='lg:w-[18em] w-full px-2 border-[0.2em] placeholder-gray-500  border-white bg-transparent text-[#222260] font-medium'></textarea>
            </div>
        </form>
            <div>
                <button className='p-2 text-white bg-pink-600 rounded-full hover:bg-pink-500' onClick={handleSubmit}>+ Add Expense</button>
            </div>
    </div>
  )
}

export default ExpenseForm
