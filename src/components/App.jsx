import Profile from './profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transaction/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';

import transaction from 'data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} title={'Upload stats '} />

      <FriendList />

      <TransactionHistory transaction={transaction} />
    </div>
  );
};
