// Apps.js
import React, { useState } from 'react';
import {Context } from './Context';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

function Apps() {
  const [globalState, setGlobalState] = useState('Here, The State is initial');

  return (
    <Context.Provider value={{ globalState, setGlobalState }}>
      <div className="Apps">
        <h3>Context App</h3>
        <ChildOne />
        <ChildTwo />
        <ChildThree />
      </div>
    </Context.Provider>
  );
}

export default Apps;
