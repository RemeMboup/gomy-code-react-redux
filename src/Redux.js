import {createSlice, configureStore} from "@reduxjs/toolkit"
const totosSlice = createSlice({
    name: "todo", 
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },

    ],
    reducers:{
        addTask: (state, action) => {
            // {type: "todo/addTask", payload: "Aller faire cours"}
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            // { type:"todo/toggleTask", payload: 20}
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask : (state, action) => {
            //{type:"toto/deleteTask", payload:20}
            state = state.filter((t) => t.id !== action.payload)
            return state;

        },
        editTask : (state, action) => {
            //{type:"toto/deleteTask", payload:20}
            const {id, text, done} = action.payload;
            const existingTask = state.find((t) => t.id === id);
            if(existingTask){
                existingTask.text = text;
                existingTask.done =done
                console.log("mareme");
                
                console.log(existingTask.text)
            }
            
 
        }
    }


});
export const {addTask, deleteTask, toggleTask, editTask} = totosSlice.actions;

export const store = configureStore({
    reducer:{
        todo: totosSlice.reducer
    }
});

