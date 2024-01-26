import {configureStore} from "@reduxjs/toolkit"
import mysliceReducer from "./slice"
const store = configureStore({
    reducer: {
        
        users:mysliceReducer
    }
})
export default store