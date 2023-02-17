// App.js
import React, { useState } from 'react';
import {Context } from './Context';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

function Apps() {
  const [globalState, setGlobalState] = useState('initial state');

  return (
    <Context.Provider value={{ globalState, setGlobalState }}>
      <div className="App">
        <ChildOne />
        <ChildTwo />
        <ChildThree />
      </div>
    </Context.Provider>
  );
}

export default Apps;
