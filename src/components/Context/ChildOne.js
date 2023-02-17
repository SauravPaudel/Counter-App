import React,{useContext} from 'react';
import {Context} from './Context';
function ChildOne(){
const{globalState,setGlobalState}=useContext(Context);
const handClick = ()=> {
  setGlobalState('This is Updated from Child One')
};
return(
  <div className="childOne">
    <h2>Child One</h2>
    <p>{globalState}</p>
    <button className='btn' onClick={handClick}>Update Global State</button>
  </div>
);
}
export default ChildOne;