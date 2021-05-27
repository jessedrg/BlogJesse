import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../src/Freatures/userSlice'

export default configureStore({
    reducer:{
        user:userReducer
    }
})