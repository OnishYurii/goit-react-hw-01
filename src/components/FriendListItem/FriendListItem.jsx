import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  const statusClasses = clsx(css.status, {
    [css.isOnline]: isOnline,
    [css.isOffline]: !isOnline,
  });
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
