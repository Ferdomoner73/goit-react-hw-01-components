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
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}