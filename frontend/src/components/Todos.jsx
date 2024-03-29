/* eslint-disable react/jsx-key */

export default function Todos(props) {
    
  return (
    <div>
       {props.todos.map(function(todo){
            return<div>
                     <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark Complete"}</button>
                 </div>
        })}
    </div>
  )
}
