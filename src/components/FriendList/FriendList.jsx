import React from 'react';
import PropTypes from 'prop-types';

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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        })
    )
}

export default FriendList;