import NavBar from "./Components/NavBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewExpense from "./pages/expense/NewExpense";
import ExpenseReport from "./pages/expense/ExpenseReport";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Routes>
        
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/new" element={<NewExpense/>}/>
        <Route path="/view/:expenseId" element={<ExpenseDetails/>}/>
        <Route path="/edit/:expenseId" element={<NewExpense/>}/>
        <Route path="/report" element={<ExpenseReport/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
