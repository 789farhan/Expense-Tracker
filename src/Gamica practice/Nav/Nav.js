

import "./Nav.css"

import { Link } from "react-router-dom";

export function Nav() {

    return <>
    <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/Table">
          Table
        </Link>
        <Link className="nav-link" to="/Login">
          Login
        </Link>
        <Link className="nav-link" to="/Signup">
          Signup
        </Link>
        
      </div>
    </div>
  </div>
</nav>
</>

}