
export default function CreateTodo() {

  return <div>

      <input id = "title" type="text" placeholder="title" /> <br />
      <input id = "Desc" type="text" placeholder="decription" /> <br />

      <button onClick={() => {
        const title = document.getElementById("title").value;
        const description = document.getElementById("Desc").value;
         fetch("http://localhost:3000/add", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description:description
            }),
            headers: {
                "Content-type": "application/json"
            }
         })
      }}>Add Task</button>
    </div>
  
}

