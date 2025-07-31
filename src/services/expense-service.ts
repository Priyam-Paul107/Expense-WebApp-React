import apiClient from "../config/api-client";
import type { Expense } from "../Model/Expnese";

export const getExpense = () => {
  return apiClient.get<Expense[]>("/expenses");
};
export const getExpenseByExpenseId = (expenseId: string) => {
  return apiClient.get<Expense[]>("/expenses/"+expenseId);
};

export const deleteExpenseByExpenseId =(expenseId:string)=>{

  return apiClient.delete<void>("/expenses/"+expenseId);

}
export const createOrUpdateExpense=(expense:Expense)=>{
  if(expense.expenseId!==null && expense.expenseId!==undefined){
    return apiClient.put<Expense>(`/expenses/${expense.expenseId}`,expense)
  }
  return apiClient.post<Expense>("/expenses",expense)
}