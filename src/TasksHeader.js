import { useSelector } from "react-redux";

const TasksHeader = (props) => {
  const tasks = useSelector(state => state.todo);
  const undoneTasks = tasks.filter((t) => t.done === false);
  return (
    <div >
      <p className="les-taches">
        Tâches à faire : <strong>{undoneTasks.length}</strong>
      </p>
      
    </div>
  );
};

export default TasksHeader;
