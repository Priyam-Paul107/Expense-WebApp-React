import { Link, useNavigate, useParams } from "react-router-dom";
import { useExpenseByExpenseId } from "../../hooks/useExpenseByExpenseId";
import CurrencyUtils from "../../utils/CurrencyUtlis";
import getFormatedDate from "../../utils/getFormatedDate";
import ConfirmDialogue from "../../Components/ConfirmDialogue";
import { useState } from "react";
import { deleteExpenseByExpenseId } from "../../services/expense-service";
const ExpenseDetails = () => {
  const { expenseId } = useParams<{ expenseId: string }>();
  const { view, error, isloading, setLoader, setError } =
  useExpenseByExpenseId();
  const navigate =useNavigate();
  const [isShow, setIsShow] = useState(false);
  if (!expenseId) {
    return <p className="text-danger">Invalid Expense ID</p>;
  }
  const handleCancel = () => {
    setIsShow(false);
  };
  const handleConfirm = () => {
    deleteExpenseByExpenseId(expenseId)
      .then((response) => {if(response &&response.status==204){
        navigate("/")
      }})
      .catch((error) => setError(error.message))
      .finally(() => {
        setLoader(false);
        setIsShow(false);
      });
  };
  return (
    <div className="container mt-2">
      {isloading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex flex-row-reverse mb-2">
        <button
          onClick={() => {
            setIsShow(true);
          }}
          className="btn btn-sm btn-danger m-1"
        >
          Delete
        </button>
        <button className="btn btn-sm btn-warning m-1" onClick={()=>navigate(`/edit/${expenseId}`)}>Edit</button>
        <Link className="btn btn-sm btn-secondary m-1" to={"/"}>
          Back
        </Link>
      </div>
      <div className="card">
        <div className="card-body p-3">
          <table className="table table-borderless table-responsvie">
            <thead>
              <tr>
                <th>Name :</th>
                <td>{view ? view.name : "N/A"}</td>
              </tr>
              <tr>
                <th>Category :</th>
                <td>{view ? view.category : "N/A"}</td>
              </tr>
              <tr>
                <th>Amount :</th>
                <td>
                  {view
                    ? CurrencyUtils.getFormatedCurrency(view?.amount!)
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Note :</th>
                <td>{view ? view.note : "N/A"}</td>
              </tr>
              <tr>
                <th>Date :</th>
                <td>
                  {view ? getFormatedDate.formatDateString(view?.date!) : "N/A"}
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <ConfirmDialogue
        show={isShow}
        title=" Expense Delete ?"
        message="Are you want to delete ?"
        onClose={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default ExpenseDetails;
