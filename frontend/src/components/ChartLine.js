import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import { useGlobalContext } from '../context/globalContext';
import {dateFormat} from '../utils/dateFormat'

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)

const ChartLine = () => {
  const {incomes, expenses} = useGlobalContext();
  
  const data = {
    labels: expenses.length > incomes.length ? expenses.map((inc) =>{
        const {date} = inc
        return dateFormat(date)
    }) : incomes.map((inc)=>dateFormat(inc.date)),
    datasets: [
        {
            label: 'Income',
            data: [
                ...incomes.map((income) => {
                    const {amount} = income
                    return amount
                })
            ],
            backgroundColor: 'green',
            tension: .2
        },
        {
            label: 'Expenses',
            data: [
                ...expenses.map((expense) => {
                    const {amount} = expense
                    return amount
                })
            ],
            backgroundColor: 'red',
            tension: .2
        }
    ]
}


  
  return (
    <div className='w-full'>
    <div className=' rounded-md p-6  max-[450px]:hidden  bg-white h'>
     <Line data={data} />
    </div>
    </div>
  )
}

export default ChartLine;