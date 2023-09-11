import { useState } from "react";
import { initialFriends } from "../initialFiends.js";
import { FriendsList } from "./FriendsList.js";
import { FormAddFriend } from "./FormAddFriend.js";
import { Button } from "./Button.js";
import { FormSplitBill } from "./FormSplitBill.js";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setAddFriend((x) => !x);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {addFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {!!selectedFriend && (
        <FormSplitBill friend={selectedFriend} onSplit={handleSplitBill} />
      )}
    </div>
  );
}
