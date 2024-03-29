

import { useSelector } from "react-redux";

import {useEffect} from "react";

import store from "./userstore";


export function Users() {

let selectedata=useSelector(function (store) {
    
    return store.userdata;
})

let array=[...(selectedata.signupArray),...(selectedata. loginArray)];


useEffect(()=>{
    for(let i=0;i<=array.length;i++){
    
        if(array[i].Name4==array[i+1].Name4 && array[i].City41==array[i+1].City41 && array[i].Password123==array[i+1].Password123){
         
        
            
                document.getElementById("name").innerText=array[0].Name4
                document.getElementById("city").innerText=array[0].City41
                document.getElementById("password").innerText=array[0].Password123
            
                   
        }

        break;

    }
        
})



    return <div>
   <table border={1}>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>Password</th>
    </tr>

{
    selectedata.signupArray.map((item)=>{
        return <tr>
            <td id="name"></td>
            <td id="city"></td>
            <td id="password"></td>
        </tr>
    })
}
    
  
   </table>

    </div>

}