import { useEffect, useState } from "react";
import type { Expense } from "../Model/Expnese";
import { getExpense } from "../services/expense-service";

export const useExpenses = () => {
  const [expenses, SetExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [isloading, SetLoader] = useState(false);
  useEffect(() => {
    SetLoader(true);
    getExpense()
      .then((response) => {
        SetExpenses(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => SetLoader(false));
  }, []);
  return { expenses, error, isloading };
};
