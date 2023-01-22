import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../state/counter/counterSlice"

export default configureStore({
    reducer:{
        counter:counterSlice
    }

})