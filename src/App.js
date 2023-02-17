import React,{useState} from 'react';
import './App.css';
import Counter from './components/Counter';
import Crud from './components/Crud';
import { Context } from './components/Context/Context';
import ChildOne from './components/Context/ChildOne';
import ChildTwo from './components/Context/ChildTwo';
import ChildThree from './components/Context/ChildThree';
function App(){
  const [globalState, setGlobalState] = useState('initial state');
  return(
    <div>
       <Counter />
       <Crud />
    </div>
  );
};

export default App;