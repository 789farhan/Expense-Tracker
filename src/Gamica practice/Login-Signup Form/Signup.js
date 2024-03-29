// import "./Signup.css";

// export function Signup() {
//     return <>
//    <div className="Sigup-box ">
//   <h2>Signup</h2>
//   <form action="">
//     <div className="Usersignup">
//       <input type="text" name="" required="" />
//       <label>Username</label>
//     </div>
//     <div className="Usersignup">
//       <input type="password" />
//       <label htmlFor="">Password</label>
//     </div>
//     <a href="">
//       <span />
//       <span />
//       <span />
//       <span />
//       Submit
//     </a>
//   </form>
// </div>
//      </>
// }










export function Signup() {
  return <>
 <section>
<div className="main-form-container">
  <div id="form_section" className="form-container">
    <div className="login-form form-wraper ">
      <div>
        <div className="form-title">
          <h2>Signup</h2>
        </div>
        <div className="input-group">
          <div className="Loginbox">
            <span>
              <input placeholder="Email" className="myInput" type="text" />
            </span>
          </div>
        </div>
        <div className="input-group">
          <div className="Loginbox">
            <span>
              <input placeholder="Password" className="myInput" type="text" />
            </span>
          </div>
        </div>
        {/* <div className="forget-password">
          <a href="">FORGOT PASSWORD</a>
        </div>
        <div className="action-button">
          <button>Login</button>
        </div> */}
      </div>
    </div>
    <div className="signUp-form form-wraper">
      <div>
        <div className="form-title">
          <h2>Sign Up</h2>
        </div>
        <div className="input-group">
          <div className="Loginbox">
            <span>
              <input
                placeholder="Full Name"
                className="myInput"
                type="text"
              />
            </span>
          </div>
        </div>
        <div className="input-group">
          <div className="Loginbox">
            <span>
              <input placeholder="Email" className="myInput" type="text" />
            </span>
          </div>
        </div>
        <div className="input-group">
          <div className="Loginbox">
            <span>
              <input
                placeholder="Mobile No."
                className="myInput"
                type="number"
              />
            </span>
          </div>
        </div>
        <div style={{ marginBottom: 0 }} className="input-group">
          <div className="Loginbox">
            <span>
              <input
                placeholder="Password"
                className="myInput"
                type="password"
              />
            </span>
          </div>
        </div>
        <div className="action-button">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  <div id="multiple-btn" className="bg-btn-container">
    <div className="action-button">
      <button>Login</button>
    </div>
    <div className="action-button">
      <button>Sign Up</button>
    </div>
  </div>
</div>
</section>

  </>
}


