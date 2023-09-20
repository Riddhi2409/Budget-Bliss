import React from 'react';
import logo from '../logo-expense.webp';
import expenss from '../expenss1.jpg';
import Login from '../components/Login';

function SignUp() {
  return (
  
    <div className='flex flex-row overflow-hidden w-screen'>
      <img src={logo} className='lg:w-[50%] w-full h-screen'/>
      <img src={expenss} className='w-[50%] max-lg:hidden h-screen'/>
      <div className='absolute flex justify-center items-center'>
      <Login /> 
      </div>
    </div>
  )
}

export default SignUp
