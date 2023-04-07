import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function addTask(){
  var task_name1 = document.getElementById("task_name");
  var elemento = document.getElementById("task_menu");
  //if (task_name1!=null){
    elemento.innerHTML +=
          `<div>
          <input type = "checkbox"></input>
          <label for="task1"> ${task_name1}  </label>
          <button class="button"> <i>-</i></button>
        </div>`
  //} 

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Task List</h1> 
      <input type="text" name="task_name" placeholder='Add your new todo'></input>
      <form>
      
      <p>&nbsp;</p>

  
  <label for="Tasks"></label>

  <div id="task_menu">
    <div>
      <input type = "checkbox"></input>
      <label for="task1"> Buy a new gaming laptop  </label>
      <button class="button"> <i>-</i></button>
    </div>

    <div>
      <input type = "checkbox"></input>
      <label for="task2"> Complete a previous task  </label>
      <button class="button"> <i>-</i></button>
    </div>

    <div>
      <input type = "checkbox"></input>
      <label for="task3"> Create video for Youtube  </label>
      <button class="button"> <i>-</i></button>
    </div>

    <div>
      <input type = "checkbox"></input>
      <label for="task4"> Create a new portafolio site </label>
      <button class="button"> <i>-</i></button>
    </div>
  </div>
  
  
</form>
      <div className="card">
        <button onClick={addTask}>
          Add new task 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
