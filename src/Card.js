import React from 'react';
import Header from './Header';
import Body from './Body';

function Card({ commentObject }) {
  return (
    <div>
      <Header profileImg={commentObject.profileImg} username={commentObject.username} />
      <Body comment={commentObject.comment} />
    </div>
  );
}

export default Card;