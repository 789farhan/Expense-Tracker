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







// forDynamic routes we import  useParas library 
// these are used when we dont know what will 
// place after slash



// place this is in appjj file 



// import { BrowserRouter,Routes,Route ,useParams} from "react-router-dom"

// import { Header } from "./compnents/routes/Link/link dynamic routes";



// function Dashboard() {
//     let parans=useParams();
// return <div>
//         <h1>the Dashboard {parans.roll}</h1>
//     </div>
//  }


//  function Component() {
//     let parans1=useParams();
//     return <div>
//         <h1>This is the Sass Component {parans1.Uni},{parans1.roll} </h1>
//     </div>
//  }


 
//   function JavaScript() {
//     let parans2=useParams();
//     return <div>
//         <h1>JavaScript is the popular language ,{parans2.cnic}</h1>
//     </div>
//  }




// export default function Sao() {

// return <div>

//     <BrowserRouter>
//     <Header></Header>
//     <Routes>
//         <Route path="/hello/:roll" element={<Dashboard></Dashboard>}></Route>
//         <Route path="/conponents/:Uni/:roll" element={<Component></Component>}></Route>
//         <Route path="/Javascript/:student/:cnic" element={<JavaScript></JavaScript>}></Route>
//     </Routes>
//     </BrowserRouter>
//    </div>

//   }
  



 
