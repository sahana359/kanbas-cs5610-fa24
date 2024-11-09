import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../ReduxExamples/AddRedux/addReducer";
import todosReducer from "../ReduxExamples/todos/todosReducer";
import c from "../ReduxExamples/Quiz/c";

const store = configureStore({
reducer: { 
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
    c,
 },
});
export default store;