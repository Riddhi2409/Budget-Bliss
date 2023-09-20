import React,{useEffect} from "react";
import ChartLine from "./ChartLine";
import List from "./List";
import { useGlobalContext } from "../context/globalContext";
import History from "./History";
import { Link } from "react-router-dom";
function DashBoard() {
  const {totalIncome,totalExpenses,totalBalance,getIncomes,getExpenses,incomes,expenses} = useGlobalContext();

  useEffect(()=>{
    getIncomes();
    getExpenses(); 
  },[getIncomes,getExpenses])

  return (
    <div className="md:mx-8 my-4 px-4 flex flex-col gap-6 w-full overflow-x-hidden z-10">
      <h1 className="text-2xl font-bold text-[#222260]">All Transactions</h1>
      <div className="flex md:flex-row flex-col gap-10 w-full">
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <div>
            <ChartLine />
           </div>
           <div className="flex flex-row max-sm:flex-col justify-center items-start gap-8 w-full ">
            <div className="flex flex-col items-center gap-2 bg-white sm:px-4 p-2 sm:p-4 rounded-xl max-sm:w-full">
            <h1 className="sm:text-2xl text-lg text-[#222260] font-medium ">
              Total Income
            </h1>
              <h1 className="text-3xl text-green-400 text-[#22226099] font-bold">${totalIncome().toString()}</h1>
             </div>
             <div className="flex flex-col items-center gap-2 bg-white sm:px-4 sm:p-4 p-2 rounded-xl max-sm:w-full">
               <h1 className="sm:text-2xl text-lg text-[#222260] font-medium ">
                 Total Expenses
               </h1>
              <h1 className="text-3xl text-red-400 text-[#22226099] font-bold">${totalExpenses().toString()}</h1>
             </div>
           </div>
          <div className="flex flex-col items-center gap-2 bg-white sm:px-4 sm:p-4 p-2 rounded-xl max-sm:w-full">
       <h1 className="sm:text-2xl text-lg text-[#222260] font-medium ">
         Total Balance
       </h1>
         <h1 className="text-3xl text-lime-400 font-bold">${totalBalance().toString()}</h1>
         </div>
       </div>
       <div className="flex flex-col gap-4 w-full">
         <h1 className="text-xl font-bold text-[#222260]"t>Recent History</h1>
          <History />
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-row justify-between gap-4 px-2">
              <p className="text-[#22226099] text-base">min</p>
              <h1 className="text-[#222260] text-lg font-medium">Salary</h1>
              <p className="text-[#22226099] text-base">max</p>
            </div>
            <div className="bg-white flex flex-row w-full justify-between gap-4 p-3 rounded-lg text-xl font-medium text-[#22226099]">
            <h1> ${incomes.length ===0 ? 0 : Math.max(...incomes?.map(item => item.amount))}</h1>
              <h1>${incomes.length ===0 ? 0 : Math.max(...incomes?.map(item => item.amount))}</h1>

            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-row justify-between gap-4 px-2">
              <p className="text-[#22226099] text-base">min</p>
              <h1 className="text-[#222260] text-lg font-medium">Expenses</h1>
              <p className="text-[#22226099] text-base">max</p>
            </div>
            <div className="bg-white flex flex-row w-full justify-between gap-4 p-3 rounded-lg text-xl font-medium text-[#22226099]">
        <h1> ${expenses.length ===0 ? 0 : Math.min(...expenses?.map(item => item.amount))}</h1>
              <h1>${expenses.length ===0 ? 0 : Math.max(...expenses?.map(item => item.amount))}</h1> 
          </div> 
        </div>
            <div className="flex minism:flex-row flex-col justify-center minism:justify-between pt-10 gap-4 w-full text-white ">
              <Link to='/expenses'>
              <button className="bg-red-400 p-2 rounded-full w-full">+ Add expenses</button>
              </Link>
              <Link to='/incomes'>
              <button className="bg-green-400 p-2 rounded-full w-full">+ Add income</button>
              </Link>
            </div>
        </div>
      </div>
     </div> 
  );
}

export default DashBoard;
