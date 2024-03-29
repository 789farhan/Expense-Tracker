import { useEffect } from "react";

export function HookuseE() {
    

    useEffect(()=> {
    document.getElementById('h1').innerText="ali"
    window.$( "#box" ).draggable();
    });
    
   return <div>
     <h1 id="h1"></h1>  
     <div id="box"></div> 
    </div>
}