import React, { useState } from 'react';

import SideBar from './components/SideBar';
import Main from './components/Main';
import Dots from './components/Dots';

export default () => {
  const [state, setState] = useState({});
  const handleHover = e => setState({ ...state, shrink: e });
  return (
    <div className='App'>
      <SideBar shrink={state.shrink} handleHover={handleHover} />
      <Main shrink={state.shrink} />
      <Dots />
    </div>
  );
};
