import React from 'react';
import friends from 'data/friends.json';
import FriendItem from './FriendItem';
import PropTypes from 'prop-types';

export default function FriendList() {
  return (
    <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
