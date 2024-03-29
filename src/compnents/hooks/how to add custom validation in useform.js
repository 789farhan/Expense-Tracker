 



import { useForm } from "react-hook-form";

export  function CustomValidation() {

let {register,handleSubmit,formState:{errors}}=useForm();

function save(value) {

  console.log(value);

};
 
return <div>
  

<form onSubmit={handleSubmit(save)}>
   
 <div>
    <input {...register("roll" ,{minLength:5,maxLength:10,validate:function (value) {
     let lowervalue=value.toLowerCase();
     if(!lowervalue.includes('s')==true){
        return false;
      }else{
        return true;
      }
    }})}/>
    {errors.roll &&errors.roll.type=="minLength" ?<div>Please Enter 5 digits </div>:null}
    {errors.roll &&errors.roll.type=="maxLength" ?<div>Please Enter 10 digits </div>:null}
    {errors.roll &&errors.roll.type=="validate" ?<div>Please Enter s  </div>:null}
 </div>

 <div>
    <input {...register("uni")}/>
 </div>

<button >Login</button>

</form>
  </div>
  }