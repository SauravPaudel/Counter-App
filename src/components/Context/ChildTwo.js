import React,{useContext} from "react";
import {Context} from "./Context";

function ChildTwo(){
  const{globalState}= useContext(Context);
  return(
    <div>
      <h2>Child Two</h2>
      <p>{globalState}</p>
    </div>
  );
}

export default ChildTwo;