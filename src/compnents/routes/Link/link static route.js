 
 import {Link} from "react-router-dom";
 
 export function Header() {
    return<div>
  <nav>
    <div class="nav-wrapper">
      <Link to="#" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/hello">Dashboard</Link></li>
        <li><Link to="/conponents">Components</Link></li>
        <li><Link to="/Javascript">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
    </div>
 }



 
export function Dashboard() {
return <div>
      <h1>the Dashboard </h1>
  </div>
}
  



 
 export function Component() {
    return <div>
        <h1>This is the Sass Component</h1>
    </div>
 }


 
 export function JavaScript() {
    return <div>
        <h1>JavaScript is the popular language</h1>
    </div>
 }





 // place this in to the Appjs file and 
 //this is the static route
 

// import { BrowserRouter,Routes,Route } from "react-router-dom"

// import { Header } from "./compnents/routes/Link/link"


// import { Dashboard } from "./compnents/routes/Link/link"
// import { Component } from "./compnents/routes/Link/link"
// import { JavaScript } from "./compnents/routes/Link/link"

// export default function Sao() {

// return <div>

//     <BrowserRouter>
//     <Header></Header>
//     <Routes>
//         <Route path="/hello" element={<Dashboard></Dashboard>}></Route>
//         <Route path="/conponents" element={<Component></Component>}></Route>
//         <Route path="/Javascript" element={<JavaScript></JavaScript>}></Route>
//     </Routes>
//     </BrowserRouter>
//    </div>

//   }