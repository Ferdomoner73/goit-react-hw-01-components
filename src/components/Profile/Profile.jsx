import React from 'react';
import PropTypes from 'prop-types';

import { ProfileContainer, Description, Stats, EachStat } from './profile.styled.js';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <ProfileContainer>
        <Description>
            <img
                src={avatar}
                alt="User avatar"
            />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </Description>

        <Stats>
            <EachStat>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </EachStat>
            <EachStat>
                <span>Views</span>
                <span>{stats.views}</span>
            </EachStat>
            <EachStat>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </EachStat>
        </Stats>
      </ProfileContainer>
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}