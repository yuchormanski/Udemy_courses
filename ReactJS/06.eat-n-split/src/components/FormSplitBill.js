import { useState } from "react";
import { Button } from "./Button.js";

export function FormSplitBill({ friend }) {
  const [bill, setBill] = useState(0);
  return (
    <form className="form-add-friend">
      <h2>Split bill with {friend.name}</h2>

      <label htmlFor="">💵 Bill value</label>
      <input
        type="text"
        placeholder="Bill value ..."
        value={bill}
        onChange={(x) => setBill((x = Number(x)))}
      />

      <label htmlFor="">🧔 Your expense</label>
      <input type="text" />

      <label htmlFor="">🤼 {friend.name}'s expense</label>
      <input type="text" disabled />

      <label>💶Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
