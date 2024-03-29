import { createStore, combineReducers } from "redux";


let initailvalue = {
    initailarray: []
};


function storedata(olddata = initailvalue, newdata) {

    olddata = { initailarray:[...olddata.initailarray] };

    if (newdata.type == "Adding_Transaction" ) {

        if(newdata.comp.Transaction > 0){
            newdata.comp.type = 'income'
        }else{
            newdata.comp.type = 'exp'

        }

        olddata.initailarray.push(newdata.comp);

    } else if (newdata.type == "Remove_Transaction" && newdata != null) {

                olddata.initailarray.splice(newdata.comp, 1)
    }


    return olddata

}






let rootReducer = combineReducers({ storedata });

let createdstore = createStore(rootReducer);

export default createdstore;