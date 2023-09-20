import React from "react";
import { dateFormat } from "../utils/dateFormat";

import { IoLogoBitcoin } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import { BiSolidBank } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { FaSchoolLock } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { SiNetflix } from "react-icons/si";
import { BsGiftFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { DiYeoman } from "react-icons/di";

import { FaRegCalendarDays } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function IncomeItem({
  _id,
  title,
  amount,
  date,
  category,
  description,
  type,
  deleteItem,
}) {
  const categoryIcon = {
    bitcoin: <IoLogoBitcoin />,
    youtube: <BsYoutube />,
    salary: <FaMoneyCheckDollar />,
    freelancing: <SiFiverr />,
    stocks: <AiOutlineStock />,
    bank: <BiSolidBank />,
    other: <GiReceiveMoney />,
    investments: <FaMoneyBillTrendUp />,
  };
  const expenseIcon = {
    education: <FaSchoolLock />,
    groceries: <MdLocalGroceryStore />,
    health: <FaUserDoctor />,
    subscription: <SiNetflix />,
    takeaways: <BsGiftFill />,
    clothing: <GiClothes />,
    other: <DiYeoman />,
    travelling: <GiWorld />,
  };

  return (
    <div>
      <div className="flex gap-6 bg-[#FCF6F9] w-full h-fit p-4 justify-between items-center text-[#222260] rounded-2xl max-[460px]:hidden">
        <div className="flex flex-row gap-6 items-center ">
          <div className="text-3xl bg-slate-100 rounded-md p-2">
            {type === "income" ? categoryIcon[category] : expenseIcon[category]}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3 items-center">
              {type === "income" ? (
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              ) : (
                <div className="h-3 w-3 rounded-full bg-red-600"></div>
              )}
              <h1 className=" font-semibold text-lg">{title}</h1>
            </div>
            <div className="flex flex-row gap-6 items-center text-[#222260]">
              <h1 className="text-[#222260] font-medium">$ {amount}</h1>
              <div className="flex flex-row gap-2 items-center font-medium">
                <FaRegCalendarDays />
                <h1>{dateFormat(date)}</h1>
              </div>
              <div className="flex flex-row gap-2 items-center font-medium max-[600px]:hidden">
                <AiFillMessage />
                <h1>{description}</h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-2xl bg-[#222260] text-white rounded-full h-[1.5em] w-[1.5em] flex items-center justify-center cursor-pointer"
          onClick={() => deleteItem(_id)}
        >
          <MdDelete />
        </div>
      </div>
      <div className="min-[460px]:hidden bg-white flex flex-col gap-6 p-4">
        <div className="text-3xl bg-slate-100 rounded-md p-4 flex flex-col gap-2 justify-center items-center">
          {type === "income" ? categoryIcon[category] : expenseIcon[category]}
          <div className="flex flex-row gap-3 items-center">
            {type === "income" ? (
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            ) : (
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
            )}
            <h1 className=" font-semibold text-lg">{title}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex flex-col gap-6 items-center justify-center text-[#222260]">
            <div className="flex flex-row gap-2 items-center font-medium">
              <FaRegCalendarDays />
              <h1>{dateFormat(date)}</h1>
            </div>
            <div className="flex flex-row gap-2 items-center font-medium">
              <AiFillMessage />
              <h1>{description}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 items-center">
          <h1 className="text-[#222260] font-medium text-lg">$ {amount}</h1>
          <div
            className="text-2xl bg-[#222260] text-white rounded-full h-[1.5em] w-[1.5em] flex items-center justify-center cursor-pointer"
            onClick={() => deleteItem(_id)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
