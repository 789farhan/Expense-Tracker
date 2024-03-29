// let ourexpress=require("express");

// let app=ourexpress();

// app.use(ourexpress.json());

// // app.get("/backend",function (incoming, outgoing) {
// //     outgoing.end("we are send request on the Frontend")
// // });

// app.post('/helo',function (incoming,outgoing) {
//     console.log(incoming.body.a);
//     outgoing.json({success:true})
// })

// app.listen(1010,function () {
//     console.log("code is chaling in the backend file ");
// })



let ourexpress=require('express');

let myapp=ourexpress();

myapp.use(ourexpress.json());



myapp.listen(1010,()=>{
    console.log( "code is chaling in teh backend file ");
})




// import { Nav } from "./Gamica projects/Nav/Nav";


// import { BrowserRouter,Routes, Route } from "react-router-dom";

// import { Login } from "./Gamica projects/Login-Signup Form/Login";

// import { Signup } from "./Gamica projects/Login-Signup Form/Signup";


// import "./App.css"

// export default function App() {
 
 
//  return <>
//    <BrowserRouter>
//    <Nav/>
//    <Routes>
//    <Route path="/Login" element={<Login/>} />
//    <Route path="/Signup" element={<Signup/>} />
//    <Route path="/Table" element={<table/>} />

//    </Routes>
//    </BrowserRouter>
   
//    </>
// }