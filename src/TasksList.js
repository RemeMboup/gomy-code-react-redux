import TaskItem from "./TaskItem";
import {useSelector} from "react-redux"
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import { useState } from 'react'
//import TasksList from "./TasksList";
const TasksList = (props) => {
  const tasks = useSelector(state => state.todo) 
  const [filter, setFilter] = useState("tout");

  const filteredTasks =
    filter === "fait"
      ? tasks.filter((task) => task.done)
      : filter === "nonFait"
      ? tasks.filter((task) => !task.done)
      : tasks;
  return (
    <>
    <div>
      <TaskForm />
      <article  className="container">
        <TasksHeader />
        <div>
          <button type="submit" className="btn1 btn-dark " onClick={()=>setFilter("nonFait")}>Undo</button>
          <button type="submit" className="btn2 btn-dark " onClick={()=>setFilter("fait")}>Do</button>
          <button type="submit" className="btn3 btn-dark " onClick={()=>setFilter("tout")}>All</button>
      </div><br />
      {filteredTasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          
        />
      ))}
      
       
      
      </article>
    </div>
    </>
  );
};

export default TasksList;
