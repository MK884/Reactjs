import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/Todo/todoSllce';

export const store = configureStore({
    reducer: todoReducer
});
