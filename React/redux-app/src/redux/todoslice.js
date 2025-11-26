import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos : [{id : 1 , text : "First task"}]
};

export const todoslice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const newTodo = {
                    id : Date.now(),
                    text: action.payload, 
            };
            state.todos.push(newTodo);
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo , removeTodo } = todoslice.actions
export default  todoslice.reducer;