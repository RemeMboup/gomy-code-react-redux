import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { addTask } from "./Redux";
import { FaPlusSquare } from 'react-icons/fa'
const TaskForm = () => {
  const [text, setText] = useState("");
  const dispach = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispach(addTask(text))
    setText("");
  };

  return (
    <div className='add'>
      <h3 className="title">React Todo app</h3>
        <form className='addForm d-flex justify-content-center' onSubmit={handleSubmit}>
        <FaPlusSquare style={{marginTop:'15px', fontSize:'20px', color:'#7FCAC6', zIndex:9999999999999, borderRadius:'10px'}}/>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ajouter une nouvelle tâche"
            style={{borderRadius:'7px'}}
            className='form-control'
          />
        </form>
    </div>
    );
};

export default TaskForm;
