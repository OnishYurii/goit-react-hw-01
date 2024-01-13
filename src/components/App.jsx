import userData from '../userData.json';
import { Profile } from './Profile';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
    </div>
  );
};
