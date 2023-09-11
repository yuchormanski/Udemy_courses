import { useState } from "react";
import { Button } from "./Button.js";

export function FormSplitBill({ friend, onSplit }) {
  const [bill, setBill] = useState("");
  const [payedByUser, setPayedByUser] = useState("");
  const payedByFriend = bill ? bill - payedByUser : "";
  const [whoIsPaying, setWHoISPaying] = useState("user");

  function handleSplit(e) {
    e.preventDefault();

    if (!bill || !payedByUser) return;
    const shareIs = whoIsPaying === "user" ? payedByFriend : -payedByFriend;
    onSplit(shareIs);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSplit}>
      <h2>Split bill with {friend.name}</h2>

      <label htmlFor="">💵 Bill value</label>
      <input
        type="text"
        placeholder="Bill value ..."
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="">🧔 Your expense</label>
      <input
        type="text"
        value={payedByUser}
        onChange={(e) =>
          setPayedByUser(
            Number(e.target.value) > bill ? payedByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="">🤼 {friend.name}'s expense</label>
      <input type="text" disabled value={payedByUser ? payedByFriend : ""} />

      <label>💶Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWHoISPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
