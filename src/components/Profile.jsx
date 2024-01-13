export const Profile = ({
  user: {
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={image} alt={name} className="avatar" width="180" height="180" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="value">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{likes}</span>
        </li>
      </ul>
    </div>
  );
};
