import { configureStore } from '@reduxjs/toolkit';
import todoReduser from  './todoslice';

export const Store = configureStore({
    reducer :  todoReduser
    });

export default Store;