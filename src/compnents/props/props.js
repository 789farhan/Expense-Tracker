 


import "../../App.css";


import { Card } from "./components";

export default function Props() {

  let data=[
   {
    path:"https://images.olx.com.pk/thumbnails/380149480-240x180.webp",
    price:222000
   },
   
   {
    path:"https://images.olx.com.pk/thumbnails/380150040-240x180.webp",
    price:362222
   },
   
   {
    path:"https://images.olx.com.pk/thumbnails/380149480-240x180.webp",
    price:91000
   }
  ];
       
return <div>
  <div className="flex">
   {
    data.map(function (info) {
      return <Card price={info.price} path={info.path}></Card>
    })
   }
    
    </div>
    </div>
  }