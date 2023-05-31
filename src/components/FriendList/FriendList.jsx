import React from 'react';
import friends from 'data/friends.json';
import FriendItem from './FriendItem';

export default function FriendList() {
  return (
    <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </div>
  );
}
