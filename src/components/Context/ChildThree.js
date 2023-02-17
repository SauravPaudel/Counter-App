import React,{useContext} from 'react';
import{Context} from './Context';

function ChildThree(){
const {globalState}=useContext(Context);
return(
  <div>
    <h2>Child Three</h2>
    <p>{globalState}</p>
  </div>
);
}

export default ChildThree;