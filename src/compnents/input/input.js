import "./input.css"

export function Caluculator() {
        function code(){
          //  let v1=+document.getElementsByClassName("input1")[0].value;
          //  let v2=+document.getElementsByClassName("input2")[0].value;
          //  document.getElementsByClassName("input3")[0].value=v1+v2;
          let v1=+document.getElementById('input1').value;
          let v2=+document.getElementById('input2').value;
          document.getElementById('input3').value=v1+v2;
        }
         
         return <div>
        {/* <input className="input1" ></input>
        <input className="input2" ></input>
        <input className="input3" ></input> */}
        <input id="input1"/>
        <input id="input2"/>
        <input id="input3"/>
        <button onClick={code}>Code is chaling </button>
             </div>
    }
