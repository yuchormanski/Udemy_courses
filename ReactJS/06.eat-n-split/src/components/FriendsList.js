import { Friend } from "./Friend.js";

export function FriendsList({ friends, onSelection, selectedFriend }) {
  const data = friends;

  return (
    <ul>
      {data.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
