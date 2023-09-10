import { Button } from "./Button.js";

export function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  function select() {
    onSelection(friend);
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}&euro;
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">You and {friend.name} are even;</p>
      )}

      <Button onClick={select}>{isSelected ? "Close" : "Select"}</Button>
    </li>
  );
}
