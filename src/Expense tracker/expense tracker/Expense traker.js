import{useForm} from "react-hook-form";

import { useDispatch ,useSelector } from "react-redux";



import "./Expense Tracker.css";

export function ExpenseTracker() {
   

let {register,handleSubmit}=useForm();

let income = 0;
let expense = 0;

let Dispatch =useDispatch();

function save(data) {
   
    Dispatch({
        type:"Adding_Transaction",
        comp:data
    })
  };



  let selectedata=useSelector(function (store) {
  
    return store.storedata.initailarray;
  
  });

  selectedata.forEach(function(item){
    if(item.Transaction>0 || item.type=='income'){
      income+=+(item.Transaction)
    }else{
      expense+=+(item.Transaction)
    }
  })
 

  

  return <>

    <div id="body">

      <h1 id="heading">Expense Tracker By Farhan Ahmad</h1>

      <div id="balancebox">
        <h3>CURRENT BALANCE</h3>
        <h2 id="crntblnc">${income+expense}.00</h2>
      </div>
 
      <div id="currencybox">
        <div id="curency" className="crncy"><p className="title">INCOME</p><h5 className="digits inc">{income}.00</h5></div>
        <div id="curency" ><p className="title">EXPENSE</p><h5 className="digits exp">{expense}.00</h5></div>
      </div>


      <h4 className="transactionhistory">Transaction History</h4>
      {
        selectedata.map(function (values, mIndex) {
            return <ol id="list" >
                <li>
                    <span>{values.Description}</span>
                    <span>+${values.Transaction}</span>
                </li>
                <span id="x" onClick={function () {

                  Dispatch({
                      type:"Remove_Transaction",
                      comp:mIndex  
                    });

                }}>X</span>

            </ol>
            
        })
      }
      <hr/>

      <h4 className="transactionhistory new">Add New Transaction </h4>
      <hr/>

      <div id="bottom">

        <form id="transaction-form" onSubmit={handleSubmit(save)}>
          <h4 className="Desktrans">Description</h4>
          <input {...register("Description",{required:true})} type="text" size={46} aria-rowspan={2}  placeholder="Detail of Transaction" required />

          <h4 className="Desktrans">Transaction Amount</h4>
          <input {...register("Transaction")}type="number" size={46} aria-rowspan={2}  placeholder="Dollor value Of Transaction"  required/>

          <button id="button">Add Transaction</button>
        </form>
      
      </div>


    </div>
    </>
}