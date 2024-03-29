

import "./axios.css"


// for use this library npm install 

import axios from "axios"; 
import {useState} from "react"


export default function Weather() {
  
  let [state,setstate]=useState();
  let [pic,setpics]=useState();
  

  return <div>

    <h1>{state}</h1>

    <select  onChange={(evt)=>{

      let city=evt.target.value;

      axios.get("http://api.weatherapi.com/v1/current.json?key=371011ee2ead4341a9062345232202&q="+city+"&aqi=no"). then(function(res){
       
      
      
      setpics(res.data.current.condition.icon);
        setstate(res.data.current.temp_c);
      
  
      })


    }}>
      <option >Faisalabad</option>
      <option >lahore</option>
      <option >Karachi</option>
      <option >Multan</option>
    </select>
    
    <img src={pic} alt="" />

  </div>
}