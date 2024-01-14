import { FriendListItem } from './FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul className="friend-list">
      {items.map(friend => (
        <li key={friend.id}>
          <FriendListItem item={friend} />
        </li>
      ))}
    </ul>
  );
};
