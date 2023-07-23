import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Status } from './friendListItem.styled.js';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <ListItem>
            <Status status={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </ListItem>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}