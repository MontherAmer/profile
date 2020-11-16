import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import './style.css';
export default ({ shrink, handleHover }) => {
  return (
    <div
      className={`sidebar ${shrink ? 'sidebar--expand' : ''}`}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div className={`sidebar--icon ${shrink ? 'icon--hide' : ''}`}>
        <AiOutlineMenu size={25} />
      </div>
      {shrink ? <h1 style={{color:'white'}}>hello</h1> : null}
    </div>
  );
};
