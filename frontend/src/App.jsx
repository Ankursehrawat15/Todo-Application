import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'



function App() {

  const [todos, setTodos] = useState([]);
  
  // getting data from backend and updating state todos
  // issue: this continously sends get request on the server this is not the right way
  fetch("http://localhost:3000/list").then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
  }) 



  return (
     <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} /> 
     </div>
  )
}

export default App
