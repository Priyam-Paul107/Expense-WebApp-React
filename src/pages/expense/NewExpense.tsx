import { useFormik } from "formik";
import type { Expense } from "../../Model/Expnese";
import expenseValidation from "../../validaiton/formValidation";
import { categories } from "../../utils/categoryOptions";
import {
  createOrUpdateExpense,
  getExpenseByExpenseId,
} from "../../services/expense-service";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const NewExpense = () => {
  const navigate =useNavigate();
  const [error, setError] = useState<string>("");
  const [isupdateloading, setIsupdateLoading] = useState(false);
  const {expenseId} = useParams<{ expenseId: string }>();
  const [initialValues, setInitialValue] = useState<Expense>({
    name: "",
    amount: 0,
    category: "",
    note: "",
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    if (expenseId) {
      setIsupdateLoading(true);
      getExpenseByExpenseId(expenseId)
      .then((res) => 
        {
          if(res &&res.data){
              setInitialValue(res.data)          }
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsupdateLoading(false));
    }
  }, [expenseId]);
  const formik = useFormik({
    initialValues,
    enableReinitialize:true,
    onSubmit: (value: Expense) => {
      createOrUpdateExpense(value)
        .then((response) => {
      if(response && response.status ===201){
          navigate("/");
      }
      else if(response &&response.status===200){
          navigate(`/view/${expenseId}`)
      } 
           })
        .catch((error) => setError(error.message));
    },
    validationSchema: expenseValidation,
  });
  return (
    <div className="d-flex justify-content-center align-item-center mt-3">
      <div className="container col-md-4 col-sm-8 col-xs-12">
        {error && <p>{error}</p>}
        {isupdateloading && <p>Loading...</p>}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              type="text"
              className="form-control"
              name="name"
              id="name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger fst-italic">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.amount}
              type="number"
              className="form-control"
              name="amount"
              id="amount"
            />
            {formik.touched.amount && formik.errors.amount ? (
              <div className="text-danger fst-italic">
                {formik.errors.amount}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">
              Note
            </label>
            <textarea
              onChange={formik.handleChange}
              value={formik.values.note}
              className="form-control"
              name="note"
              id="note"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>

            <select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="category"
              id="category"
              className="form-control"
              value={formik.values.category}
            >
              <option value="" label="Select category"></option>
              {categories.map((category) => (
                <option
                  value={category}
                  label={category}
                  key={category}
                ></option>
              ))}
            </select>

            {formik.touched.category && formik.errors.category ? (
              <div className="text-danger fst-italic">
                {formik.errors.category}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.date.split("T")[0]}
              type="date"
              className="form-control"
              name="date"
              id="date"
            />
            {formik.touched.date && formik.errors.date ? (
              <div className="text-danger fst-italic">{formik.errors.date}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary  app-primary-bg-color  btn-outline-light"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewExpense;
