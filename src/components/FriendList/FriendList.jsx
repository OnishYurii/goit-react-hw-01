import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(friend => (
        <li key={friend.id}>
          <FriendListItem item={friend} />
        </li>
      ))}
    </ul>
  );
};
