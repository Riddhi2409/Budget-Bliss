import React from 'react'

function List({title,amount,type}) {
  return (
    <div className='flex flex-row justify-between gap-4 bg-white w-full rounded-lg py-1 px-4'>
        <h1 className={`${ type === "expense" ? "text-red-500 text-lg": "text-green-500 text-lg"}`}>{title}</h1>
        <h1 className={`${ type === "expense" ? "text-red-500 text-lg": "text-green-500 text-lg"}`}>${amount}</h1>
    </div>
  )
}

export default List
