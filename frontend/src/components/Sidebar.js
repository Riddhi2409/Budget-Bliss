import React from 'react';

import {NavLink} from 'react-router-dom'
import avatar from '../avataaars.png'
import { PiSignOutFill } from 'react-icons/pi';

import { useUserAuth } from '../context/userContext';
import { BsGraphUp } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

const isNotActiveStyle = 'text-[#22226099] text-medium text-lg flex gap-2 items-center cursor-pointer px-2 hover:text-[#222260]';
const isActiveStyle = 'text-[#222260] border-l-4  border-[#222260] text-medium text-lg flex gap-2 items-center cursor-pointer px-2 rounded-sm';



function Sidebar({closeToggle}) {
    const {user,logout} = useUserAuth();
    
  return (
    <div className='flex flex-col bg-[#fcf6f9c7] gap-10 min-h-[95vh] overflow-y-auto minism:min-w-[20em] w-full hide-scrollbar dark:text-slate-400   rounded-2xl border-4 border-[#FFFFFF] md:p-10 shadow-lg  z-50 overflow-x-hidden p-2'>
        <div className='flex flex-row items-center  gap-4 '>
            <div className='rounded-full  h-[4.5em] w-[4.5em] flex items-center justify-center border-4 border-[#FFFFFF] '>
                <img src={user?.picture} alt="user" className='w-[3em] rounded-full '/>
            </div>
            <div className='flex flex-col '>
                <h1 className=' text-lg text-[#222260] font-semibold'>{user?.name.split(" ")[0]}</h1>
                <p className=' text-sm text-[#22226099] font-medium'>Your Money</p>
            </div>
        </div>
        <div className='flex flex-col gap-4'> 
                
                    <NavLink 
                        to={"/"}
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={closeToggle}
                        >
                        <BsGraphUp />
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to={"transactions"}
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={closeToggle}
                        >
                       <FaMoneyCheckAlt />
                       View Transactions
                    </NavLink>
                    <NavLink 
                        to={"incomes"}
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={closeToggle}
                        >
                        <FaMoneyBillTrendUp />
                        Incomes
                    </NavLink>
                    <NavLink 
                        to={`expenses`}
                        className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
                        onClick={closeToggle}
                        >
                        <FaMoneyBillTransfer />
                        Expenses
                    </NavLink>
        </div>
        <div>
            <button className='fixed bottom-10 flex flex-row gap-2 items-center font-semibold text-lg hover:text-[#222260]' onClick={logout}>
                <PiSignOutFill /> 
                <h1>Sign Out</h1>
            </button>
        </div>
    </div>
  )
}

export default Sidebar