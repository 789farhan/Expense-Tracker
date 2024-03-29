

import  YouTube  from "react-youtube"

import "../../../App.css";

import { useState } from "react";

export  function Video() {


    let [currentvideo,setvideo]=useState("");

let ids=[
    "oXT2-m2Iebc",
    "ylu5ktF8GlA",
    "lh6Ltp5Ew9k"
];



return <div>
<div className="container">
{

    ids.map(function (id) {
        return <div className="pic" onClick={function () {
               setvideo(id);
         }}>
            <img width={250} height={200} src={"http://img.youtube.com/vi/"+id+"/0.jpg"}/>
        </div>
    })
}    
   </div>
   {currentvideo!=undefined ?<YouTube videoId={currentvideo}/> :null}
   </div>

  }