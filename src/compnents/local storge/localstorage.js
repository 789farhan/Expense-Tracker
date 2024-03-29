import {useState} from "react";
 
export  function LocalStorage() {

    let parse=JSON.parse(localStorage.getItem("obj"))

    let [res ,setres]=useState(parse||[]);

function Add() {
    
    let name=prompt("Enter name");
    res.push(name);
    setres([...res]);

    localStorage.setItem("obj",JSON.stringify(res));
    
}

return <div>
    <ol>
    {
        res.map(function (Name) {
            return <li>{Name}</li>
        })
    }
    </ol>
    <button onClick={Add}>Add user</button>
    </div>
  }