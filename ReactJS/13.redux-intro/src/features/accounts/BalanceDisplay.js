import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("bg", {
    style: "currency",
    currency: "BGN",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((store) => store.account.balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
