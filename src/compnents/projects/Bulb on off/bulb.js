
// Place this file in App js 

import  {useState} from "react";

export default function Bulb() {

  let [src,setsrc]=useState("off");

function On() {

    setsrc("on");
}



function OFF() {
    setsrc("off");
       
}
return <div>
  <img src={"/bulb/"+src+'.png'}></img>
   
   <div>
    <button onClick={On}>On</button>
    <button onClick={OFF}>OFF</button>
   </div>
   </div>

  }