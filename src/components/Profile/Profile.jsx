import css from './Profile.module.css';
import defaultAvatar from './default-avatar.png';
import { FcBusinessman, FcGlobe, FcLike } from 'react-icons/fc';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { GrView } from 'react-icons/gr';

export const Profile = ({
  user: {
    name,
    tag,
    location,
    image,
    stats: { followers, views, likes },
  },
}) => {
  const profileImage = image || defaultAvatar;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={profileImage} alt={name} className={css.avatar} width="120" height="120" />
        <p className={css.name}>
          {name}
          <FcBusinessman />
        </p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>
          <FcGlobe />
          {location}
        </p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.subtitle}>
            Followers
            <LiaUserFriendsSolid />
          </span>
          <span className={css.value}>{followers}</span>
        </li>
        <li>
          <span className={css.subtitle}>
            Views
            <GrView />
          </span>
          <span className={css.value}>{views}</span>
        </li>
        <li>
          <span className={css.subtitle}>
            Likes
            <FcLike />
          </span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
