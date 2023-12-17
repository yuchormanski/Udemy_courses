import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("bg", {
    style: "currency",
    currency: "BGN",
  }).format(value);
}

//NEW WAY
function BalanceDisplay() {
  const { balance, isLoading } = useSelector((store) => store.account);
  return (
    <div className="balance">
      {isLoading ? "Converting ..." : formatCurrency(balance)}
    </div>
  );
}
export default BalanceDisplay;

//OLD WAY
// function BalanceDisplay({balance}) {
//   return <div className="balance">{formatCurrency(balance)}</div>;
// }
// function mapStateToProps(state) {
//   return {
//     balance: state.account.balance,
//   };
// }
// export default connect(mapStateToProps)(BalanceDisplay);
