

// Handle subnit input ka inder sa value nikalte haa and 
// input paa validations lagana ka liya use hote haa 
// validations ka liya formState:{errors} handlesubmit ka sath import kare 


import {useForm} from "react-hook-form";


export  function Errors() {
  

  let { register,handleSubmit,formState:{errors}}=useForm();

  function Save(value) {
   
    console.log(value);
  
  };

  return <div>

<form onSubmit={handleSubmit(Save)}>
  
<div>
<input {...register("uni",{required:true,minLength:5,maxLength:10})} ></input>
{errors.uni  && errors.uni.type=="required"?  <div>Please Enter uni </div>:null}
{errors.uni && errors.uni.type=="minLength" ? <div>Please Enter atleat five characters </div>:null}
{errors.uni && errors.uni.type=="maxLength" ? <div>Please Enter 10 characters </div>:null}
</div>

<div>
<input {...register("Roll",{required:true,minLength:5,maxLength:10})} ></input>
{errors.Roll && errors.Roll.type=="required" ? <div>Please Enter Roll</div>:null}
{errors.Roll && errors.Roll.type=="minLength" ? <div>Please Enter Atleast five characters</div>:null}
{errors.Roll && errors.Roll.type=="maxLength" ? <div>Please Enter least 10n characters </div>:null}
</div>

<button>Login</button>

</form>
  </div>
}