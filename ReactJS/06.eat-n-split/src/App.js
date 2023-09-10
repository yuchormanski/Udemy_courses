import { useState } from "react";
import { initialFriends } from "./initialFiends.js";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);

  function handleShowAddFriend() {
    setAddFriend((x) => !x);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill></FormSplitBill>
    </div>
  );
}

function FriendsList({ friends }) {
  const data = friends;

  return (
    <ul>
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
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

      <Button>Select</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !img) return;

    const id = crypto.randomUUID();
    const newFriend = {
      // id: Date.now(),
      id,
      name: name,
      image: `${img}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImg("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">👬 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">🖼 Image URL</label>
      <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  const [bill, setBill] = useState(0);
  return (
    <form className="form-add-friend">
      <h2>Split bill with X</h2>

      <label htmlFor="">💵 Bill value</label>
      <input
        type="text"
        placeholder="Bill value ..."
        value={bill}
        onChange={(x) => setBill((x = Number(x)))}
      />

      <label htmlFor="">🧔 Your expense</label>
      <input type="text" />

      <label htmlFor="">🤼 X's expense</label>
      <input type="text" disabled />

      <label>💶Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
