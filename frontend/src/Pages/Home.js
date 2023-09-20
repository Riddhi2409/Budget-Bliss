import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Income from "../components/Income";
import Expense from "../components/Expense";
import ChartLine from "../components/ChartLine";
import DashBoard from "../components/DashBoard";
import { Route, Routes } from "react-router-dom";
import Transactions from "../components/Transactions";

import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

function Home() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="relative flex md:flex-row flex-col h-screen items-center justify-center p-4 overflow-hidden">
      <div className="max-lg:hidden lg:flex h-full">
        <Sidebar />
      </div>

      <div className="max-lg: mx-4 flex-col bg-[rgba(252,246,249,0.78)] border-4 border-[#FFFFFF] w-full lg:mr-4 overflow-y-scroll min-h-[95vh] rounded-2xl">
        {/* <Expense /> */}
        {!toggleSidebar && <div className="flex lg:hidden p-4"> 
          <div>
            <HiMenu
              fontSize={40}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(true)}
            />
          </div>
        </div>}
        <div className="flex flex-row">
        {toggleSidebar && (
          <div className="fixed shadow-md z-50 h-fit bg-[#fcf6f9c7] rounded-2xl lg:hidden">

            <div className="absolute w-full  flex justify-end items-center p-2">
              <AiFillCloseCircle
                fontSize={30}
                className="cursor-pointer"
                onClick={() => setToggleSidebar(false)}
              /> 
            </div>
            <div >
            <Sidebar closeToggle={()=>setToggleSidebar(false)} />
            </div>
          </div>
        )}
        <Routes>
          <Route exact path="/expenses" element={<Expense />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/incomes" element={<Income />} />
          <Route path="/*" element={<DashBoard />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
