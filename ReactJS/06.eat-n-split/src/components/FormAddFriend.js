import { useState } from "react";
import { Button } from "./Button.js";

export function FormAddFriend({ onAddFriend }) {
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
