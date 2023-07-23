

import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import { List } from './FriendList.styled.js';

const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (<FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />)
            })}
        </List>
    );
}

export default FriendList;