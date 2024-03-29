
import "./onclick.css"

import { useState } from "react";

export  function Onclickchnge() {
    

  let [currentdata,setdata]=useState("");

  let data=[
     "Farhan",
     "Ahsan",
     "Asfar"
  ];

  return <div>

     <h1>{currentdata}</h1>

   <table border={1} width={300}>
   {

    data.map(function (item) {
  
  return <tr className={item==currentdata?"selected":""} onClick={()=>{
    setdata(item);
  }}>
  
        <td>{item}</td>
  
      </tr>
   
  })
   
   }
   </table>

  </div>
}