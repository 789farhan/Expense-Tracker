// // export default function Call() {

// //   let [count,setcount]=useState(0);

// //   function Incre(){
// //       setcount(count+1);
// //   }
// //   function decre(){
// //     setcount(count-1);
// // }
// //   return(
// //     <div>
// //       <div>{count}</div>
// //       <button onClick={Incre}>Increase</button>
// //       <button onClick={decre}>Decrease</button>
// //     </div>
// //   ) 

// // }






// import {React,useState} from"react";

// export   function usehook2() {
 
//     let [items, setItems] = useState([
//       {
//         name:"ali",
//         city:"FSD"
//       },
//       {
//         name:"rameez",
//         city:"LHR"
//       },
//       {
//         name:"fizza",
//         city:"MUL"
//       }
//     ]);
  
//    return <div>
      
//       <button onClick={function () {
//         let newname=prompt("Enter nae");
//         let newcity=prompt("Enter nae");
  
//         let objUser={name:newname,city:newcity};
//         items.push(objUser);
//         setItems([...items])
//       }}>
//         Add user
//       </button>
  
//       <table border="1">
//         {
//           items.map(function (obj,index) {
            
//            return <tr>
//                    <td>{obj.name}</td>
//                    <td>{obj.city}</td>
//                    <td><button onClick={function () {
//                     items.splice(index,1);
//                     setItems([...items])
//                    }}>del</button></td>
//                    <td><button onClick={function () {
//                         obj.name=prompt("Enter na")
//                         obj.city=prompt("Enter city")
//                     setItems([...items])
//                    }}>Edit</button></td>
                   
//             </tr>
//           })
//         }
//     {
      
//     }
//       </table>
  
//     </div>
//   }



