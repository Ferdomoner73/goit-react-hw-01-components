import { Container } from './components/App/app.styled.js';
import { Profile } from './components/Profile/Profile.jsx';
import { Statistics } from './components/Statistics/Statistics.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import { TransactionsHistory } from 'components/TransactionsHistory/TransactionsHistory.jsx';
import user from './components/Profile/user.json';
import friends from './components/FriendList/friends.json';
import items from './components/TransactionsHistory/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList friends={friends} />
      <TransactionsHistory items={items}/>
    </Container>
  );
};
