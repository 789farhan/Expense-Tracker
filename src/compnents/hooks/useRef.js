    // when we import useRef no need to get Html tags 
    // by tagnane , classnane ,id etc.

    import {useRef,useState} from "react"


    export  function Refrence() {
     
      let data=useRef();
     
      function Call() {
          data.current.innerText="farhan"      
      }
     
     
     return <div>
     <h1 ref={data}></h1>
     <button onClick={Call} >Show data</button>
      </div>
    }




    export function Add() {

        let [res,setres]=useState(0);
    
        let v1Ref=useRef();
        let v2Ref=useRef();
        let v3Ref=useRef();
        
         
        function Add() {
          let  v1=+v1Ref.current.value;
          let  v2=+v2Ref.current.value;
          let  v3=+v3Ref.current.value;
    
          setres(v1+v2+v3);
        }
          
    
      
        
       return <div>
          <input ref={v1Ref}/>
          <input ref={v2Ref}/>
          <input ref={v3Ref}/>
          <h1>{res}</h1>
          <button onClick={Add}>Add btn</button>
        </div>
      }