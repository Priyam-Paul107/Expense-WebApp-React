import ExpenseList from "../../Components/ExpenseList";
import { useExpenses } from "../../hooks/useExpenses";
import type { Expense } from "../../Model/Expnese";
import DashBoardStatus from "./DashBoardStatus";

const Dashboard = () => {
const email="Priyampaul106@gmail.com"
const{error,expenses,isloading}=useExpenses();
const totalMoney =expenses.reduce((acc:number,expense:Expense)=>acc+expense.amount,0)
  return (
  <div className="container">
  <div>{error&&<p>{error}</p>}</div>
  <div>{isloading&&<p>Loading...</p>}</div>
  <DashBoardStatus  email={email} totalAmount={totalMoney}/>
  <ExpenseList expenses={expenses}/>
    
    </div>)
}

export default Dashboard