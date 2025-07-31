import getFormatedDate from "../../utils/getFormatedDate";
import CurrencyUtlis from "../../utils/CurrencyUtlis";

 interface Props{
  email:String,
  totalAmount:number
}
const DashBoardStatus = ({email,totalAmount}:Props) => {
  return (
    <div className="mt-2">
      <div className="text-center">
        <h5 className="mb-4">Total Expenses</h5>
        <h3>
          <span className="badge rounded-pill app-primary-bg-color">
            {CurrencyUtlis.getFormatedCurrency(totalAmount)}
            </span>
        </h3>
        <div className="d-flex justify-content-between m-3">
          <div>Welcome , {email}</div>
          <div>{getFormatedDate.getDate(new Date())}</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardStatus;
