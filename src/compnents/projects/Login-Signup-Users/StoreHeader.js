import {Link} from "react-router-dom";

export function StoreHeader() {
    return <div>
         <nav>
    <div class="nav-wrapper">
      <Link to="/" class="brand-logo">Logo</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  </nav>
    </div>
}