import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "./Redux";
import {useParams, useNavigate } from "react-router-dom"


const EditTask = () => {
 // const [text, setText] = useState("");
  const navigate = useNavigate()
  let  param  = useParams();
  console.log(param);
  console.log("mon param");
  
  console.log(param.id);
  //let idEditing = param.id;
  
  const tasks = useSelector(state => state.todo) 
  console.log('les taches de store');
  
  console.log(tasks)
  console.log('l id du param');
  
  //const existingTask  = tasks.filter(task => task.id === 2)
  const existingTask  = tasks.filter(task => task.id === 1)
  console.log('Mon objet');
  
  console.log(existingTask);
  
  console.log('esss')
  console.log(existingTask[0]['text'])
  const text = existingTask[0]['text'];
  const done = existingTask[0]['done']
  console.log('textTask');
  //const {text, done} = existingTask][0]
  console.log(text)
  const [values, setValues] = useState({
      text,
      done

  });

  const dispach = useDispatch();
  const handleEditTask = (e) => {
    e.preventDefault()
    dispach(editTask({
        id:1,
        text: values.text,
        done:false
    }))
    console.log("je veux enregistrer")
    navigate('/')
    
  };

  return (
    <form onSubmit={handleEditTask}>
      
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={values.text}
        
        onChange={(e) => setValues({...values,text: e.target.value})}
      />
    </form>
  );
};

export default EditTask;
