import React,{useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Crud from './components/Crud';
import Apps from './components/Context/Apps';

function App(){
  return(
    <div>
       <Counter />
       <Crud />
       <Apps />
    </div>
  );
};

export default App;