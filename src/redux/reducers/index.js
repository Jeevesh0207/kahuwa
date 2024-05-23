import {combineReducers } from '@reduxjs/toolkit';
import fetchData from './fetch' 

const rootReducer = combineReducers({
    getFetch:fetchData
});

export default rootReducer;
