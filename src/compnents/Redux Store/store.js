//install redux
//install react-redux
// Before use this library 

import { createStore ,combineReducers} from "redux";

// import { Adds } from "./store componenet";

import { Users } from "./store componenet";



let rootReducer=combineReducers({Users});


let oustore=createStore(rootReducer);

export default oustore;




// Place this in the App js file 




// import { Card } from "./compnents/Redux Store/Card";


// import { useSelector,useDispatch } from "react-redux";

// import mereWalastore from "./compnents/Redux Store/store";
// // import { Adds } from "./compnents/Redux Store/store componenet";






// export default function App() {
  
//   // let ourdata=useSelector(function (mereWalastore) {
//   //   return mereWalastore.Adds;
//   // })
  

//   let ourdispatch=useDispatch();


//   //   function Price() {
      
//   //     let newprice=+prompt("Enter price");

//   //       ourdispatch({
//   //       type:"Change_Price",
//   //       updateprice:newprice

//   //     })
//   //   }


//     let newidentity=useSelector(function (mereWalastore) {
    
//     return mereWalastore.Users;
  
// });



//   function Name() {  

//   let name=prompt("Enter name");

//   ourdispatch({
//     type:"Adding_user_name",
//     identity:name
//   });

//   }

//   return <div>
 
//  <ol>
//   {
//     newidentity.usersdata.map(function (names) {
//       return <li>
//         {names}
//       </li>
//     })
//   }
//  </ol>

//    <button onClick={Name}>Add Name</button>


   
//  {/* <div className="flex">
// {
//   ourdata.array.map(function (item) {
//     return <Card path={item.path} price={item.price}></Card>
//   })
// }
//   </div>
//  <button onClick={Price}>ADD price</button> */}
//   </div>
// }
