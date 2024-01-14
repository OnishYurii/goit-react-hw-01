import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './Profile';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <FriendList items={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
