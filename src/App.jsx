import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./reducers/tasksSlice";
import TaskList from "../src/components/TaskList";
import TaskForm  from "../src/components/TaskForm";
import CountTasks from "./components/CountTasks";

const reducer = combineReducers({
  tasks: tasksSlice.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>Todo App</h1>
        <TaskForm />
        <TaskList />
        <CountTasks />
      </div>
    </Provider>
  );
};
