import { BsGraphUp } from 'react-icons/bs';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        link: <BsGraphUp />
    },
    {
        id: 2,
        title: "View Transactions",
        
        link: <FaMoneyCheckAlt />
    },
    {
        id: 3,
        title: "Incomes",
        link: <FaMoneyBillTrendUp />,
    },
    {
        id: 4,
        title: "Expenses",
        link: <FaMoneyBillTransfer />,
    },
]