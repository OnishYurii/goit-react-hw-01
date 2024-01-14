import userData from '../userData.json';
import friends from '../friends.json';
import { Profile } from './Profile';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <FriendList items={friends} />
    </div>
  );
};
