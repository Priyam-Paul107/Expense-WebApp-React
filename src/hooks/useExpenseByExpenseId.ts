import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Expense } from "../Model/Expnese";
import { getExpenseByExpenseId } from "../services/expense-service";

export const useExpenseByExpenseId = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const [view, setView] = useState<Expense | undefined>();
  const [error, setError] = useState<string>("");
  const [isloading, setLoader] = useState<boolean>(false);
  useEffect(() => {
    if (expenseId) {
      setLoader(true);
      getExpenseByExpenseId(expenseId!)
        .then((response) => setView(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoader(false));
    }
  }, []);
  return {view,error,isloading,setLoader,setError}
};
