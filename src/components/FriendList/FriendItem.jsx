import React from 'react';
import { Status, Item, List } from './FriendList.styled';
import PropTypes from 'prop-types';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <List>
      <Item>
        <Status stat={isOnline}></Status>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </Item>
    </List>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
