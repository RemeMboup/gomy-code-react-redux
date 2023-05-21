import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from './Redux';
import { Link } from 'react-router-dom';


const TaskItem = (props) => {
  const { task} = props;
  const dispatch = useDispatch()
console.log(task.text)
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => dispatch(toggleTask(task.id)
          )}
        />
        {task.text}

        <span
          onClick={() => dispatch(deleteTask(task.id) )}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
            <button className="btn btn-danger">Supprimer</button>

        </span> 
        <Link to={`edit_task/${task.id}`}><span
         onClick={() => dispatch(editTask(task.id) )}
         role="button"
         style={{ padding: "5px", marginLeft: "20px" }}
         
        >
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Modifier</button><br />

        </span> 
        </Link> <br />
     
       
      </label>
     
    </div>
  );
};

export default TaskItem;
