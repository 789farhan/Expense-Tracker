
// let cardarray={
//  array:   [
//         {
//          path:"https://images.olx.com.pk/thumbnails/380149480-240x180.webp",
//          price:222000
//         },
        
//         {
//          path:"https://images.olx.com.pk/thumbnails/380150040-240x180.webp",
//          price:362222
//         },
        
//         {
//          path:"https://images.olx.com.pk/thumbnails/380149480-240x180.webp",
//          price:91000
//         }
//        ]
// }

// let length=cardarray.array.length;
// let count=0;
// export function Adds(olddata=cardarray,newdata) {
//     count++;
//     if(newdata.type=="Change_Price" && count<length || count==length){
//         olddata.array[count].price=newdata.updateprice;
//     }

//     // olddata=olddata({...olddata})

//     return olddata;
// }



// let initaildata={
//    usersdata: []
// }


// export function Users(olddata=initaildata,newdata){
    
//     olddata={...olddata}

//     if(newdata.type=="Adding_user_name"){
//         olddata.usersdata.push(newdata.identity);
//     }

//     return olddata;
    
// }