import { createStore,combineReducers } from "redux";


let initialdata={
   signupArray:[],
   loginArray :[],
};

function userdata(olddata=initialdata,newdata) {
    olddata={...olddata};



    if(newdata.type=="Signup_User" ){
       olddata.signupArray.push(newdata.Signupdata);
    }


    if(newdata.type=="Login_User"){
        olddata.loginArray.push(newdata.logindata);
     }

    //  if(olddata.loginArray!=null && olddata.signupArray!=null){
        
    //     Pushdata();
    //  }

    //  function Pushdata() {
        
    //  let resultArray=[olddata.loginArray,olddata.signupArray];

    //  for(let i=0;i<resultArray.length;i++){
       
    //     if(resultArray[0][0]==resultArray[1][0] 
    //     && resultArray[0][1]==resultArray[1][1]
    //     && resultArray[0][2]==resultArray[1][2]){
             
    //    return olddata;
             
    //     }
    //  }
    //  }
    
    return olddata;

}

let rootReducer=combineReducers({userdata})

let store=createStore(rootReducer);

export default store;



// Place  in the App.js




// // npm i react-toastify 
// //before use this library use command 

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// import { userstore } from "./compnents/projects/Login-Signup-Users/userstore"


// import { BrowserRouter,Routes,Route } from "react-router-dom"

// import { StoreHeader } from "./compnents/projects/Login-Signup-Users/StoreHeader"

// import { Signup } from "./compnents/projects/Login-Signup-Users/Signup"

// import { Login } from "./compnents/projects/Login-Signup-Users/Login"

// import { Users } from "./compnents/projects/Login-Signup-Users/Users"

// export default function App() {
    

//   return <div>

//     <BrowserRouter>

//     <StoreHeader></StoreHeader>

//     <Routes>
//       <Route path="/signup" element={<Signup/>}></Route>
//       <Route path="/login" element={<Login/>}></Route>
//       <Route path="/users" element={<Users/>}></Route>
//     </Routes>
//     </BrowserRouter>
// <ToastContainer/>
//   </div>
// }