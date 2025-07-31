import * as yup from "yup";
const expenseValidation = yup.object({
  name: yup.string().required("Expense name is requied")
  .min(3,"Expense Name must be atleast 3 charactera"),
  amount: yup.number().required("Expense amount is requied")
  .positive("Expense Amount must be greater than 0"),
  category: yup.string().required("Expense category is requied"),
  date: yup.date().required("Expense date is requied"),
});
export default expenseValidation;
