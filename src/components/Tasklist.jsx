import { Task } from "./Task";
import { useEffect, useState } from "react";

export const TaskList = (props)=>{
    const { list } = props;
    const [checkedTasks, setIsCheckedTasks] = useState([]);

    const handleChecked = (taskName) => {
        let newCheckedTask = [...checkedTasks];
        if(!checkedTasks.includes(taskName)){
          newCheckedTask = [...newCheckedTask, taskName];
        } else {
          newCheckedTask = newCheckedTask.filter((task) => taskName != task);
        }

        setIsCheckedTasks(newCheckedTask);

        localStorage.setItem("checkedTasks", JSON.stringify(newCheckedTask));
    };

    useEffect(() => {
      const localTasks = JSON.parse(localStorage.getItem('checkedTasks')) || [];
      setTasks(localTasks);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('checkedTasks', JSON.stringify(checkedTasks));
    }, [checkedTasks]);
  

   
    return(
        <ul>
            {
            list.map((task) => (
                <Task key={task.name} name={task.name} onChecked={handleChecked} isChecked={checkedTasks.includes(task.name)}
                />
            ))}
        </ul>
    );
};