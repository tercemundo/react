import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/todos'
  const [todos, setTodos] = useState()
  
  const fetchapi = async () => {

    const response = await fetch(url)
    console.log(response.statusText)
    const responseJSON =  await response.json()
    setTodos(responseJSON)
    console.log(responseJSON)
  }

  useEffect(() => {
    fetchapi()
  },[])


  return (
    <div className="App">
     Hola Mundo
     <ul>
        { !todos ? 'Cargando...' :
        todos.map( (todo,index)=>{
          return <li> key={index} {todo.title} </li>
        })
        }
        </ul>
    </div>
  );
}

export default App;
