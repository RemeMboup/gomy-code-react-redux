import "./Style.css";
import TasksList from "./TasksList";
import EditTask from "./EditTask";
import {Provider} from "react-redux";
import {store} from './Redux'
import {Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <Provider store = {store}>
     <Routes>
             <Route path='/edit_task/:id' element={<EditTask />}/>
            <Route path="/" element={ <TasksList />}/>
      </Routes>
    </Provider>
  );
}
