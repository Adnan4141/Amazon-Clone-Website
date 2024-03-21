import { configureStore } from "@reduxjs/toolkit";
import  todosReducer  from './../redux/TodosSlics';





const store = configureStore({
    
    reducer:{
        todosReducer:todosReducer,
    }

})

export default store;