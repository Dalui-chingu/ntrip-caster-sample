import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'

const store = configureStore({
    reducer: {
        connectedUsers: userReducer
    }
})
export default store;