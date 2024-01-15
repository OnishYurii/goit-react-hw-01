import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <FriendList items={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
