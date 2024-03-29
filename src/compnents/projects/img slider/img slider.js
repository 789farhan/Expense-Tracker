// Place this file in App js 



import {useState} from "react";

export default function Sao() {

    let  [src,setsrc]=useState(1);


    function Right() {
         src++;
         if(src>5){
            setsrc(1);
         }else{
            setsrc(src);
         }
    }


    
    function Left() {
        src--;
        if(src<1){
           setsrc(5)
        }else{
           setsrc(src);
        }
   }

return <div>
  <img width={400} height={400} src={"/imgs/"+src+".png"}></img>  
   
   <div>
    <button onClick={Left}>Left</button>
    <button onClick={Right}>Right</button>
   </div>
   </div>

  }