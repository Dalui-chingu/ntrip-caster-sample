import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        basestations: userReducer
    }
})
export default store;