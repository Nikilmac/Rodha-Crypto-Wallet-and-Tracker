import { combineReducers } from "@reduxjs/toolkit";

import authReducer from '../Slice/AuthSlice'
import profileReducer from "../Slice/ProfileSlice"
export const rootReducer = combineReducers({
    auth : authReducer,
    profile:profileReducer
})