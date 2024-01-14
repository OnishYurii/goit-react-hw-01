export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <div className="item">
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className="name">{name}</p>
      <p className="status">{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};
