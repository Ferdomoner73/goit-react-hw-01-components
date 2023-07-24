import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Status } from './friendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <Status status={isOnline}></Status>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </ListItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}