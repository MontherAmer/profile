import React from 'react';

import './style.css';
export default ({ shrink }) => {
  return (
    <div className={`main ${shrink ? 'main--shrink' : 'main--expand'}`}>
      main main main main main main main main main main main main main main main main main main main main main main main
      main main
    </div>
  );
};
