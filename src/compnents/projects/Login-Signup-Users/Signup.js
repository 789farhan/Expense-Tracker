

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";

import { toast } from "react-toastify";

export function Signup() {

    let {register,handleSubmit}=useForm();

    let ourDispatch=useDispatch();

    function Savedata(values) {
      
      toast.success("Sign up data Saved ")

        ourDispatch({
            type:"Signup_User",
            Signupdata:values
        })
    }


    return <>
  <div className="section" />
  <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <div className="section" />
      <h5 className="indigo-text">Please, Signup into your account</h5>
      <div className="section" />
      <div className="container">
        <div
          className="z-depth-1 grey lighten-4 row"
          style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form onSubmit={handleSubmit(Savedata)}  className="col s12" >
            <div className="row">
              <div className="col s12"></div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="text"
                  {...register("Name4")}
                  id="Name"
                />
                <label htmlFor="email">Enter your Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="text"
                  {...register("City41")}
                  id="City"
                />
                <label htmlFor="email">Enter your City</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="password"
                 {...register("Password123")}
                  id="Password"
                />
                <label htmlFor="password">Enter your Password</label>
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!">
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>
            <br />
            <center>
              <div className="row">
                <button
                  type="submit"
                  name="btn_login"
                  className="col s12 btn btn-large waves-effect indigo"
                >
                  Signup
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
      <a href="#!">Create account</a>
    </center>
    <div className="section" />
    <div className="section" />
  </main>
</>
 

}