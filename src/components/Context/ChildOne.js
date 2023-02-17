import React,{useContext} from 'react';
import {Context} from './Context';
function ChildOne(){
const{globalState,setGlobalState}=useContext(Context);
const handClick = ()=> {
  setGlobalState('update state from ChildOne')
};
return(
  <div>
    <h2>Child One</h2>
    <p>{globalState}</p>
    <button>onClick={handClick}{'>'} Update Global State</button>
  </div>
);
}

export default ChildOne;