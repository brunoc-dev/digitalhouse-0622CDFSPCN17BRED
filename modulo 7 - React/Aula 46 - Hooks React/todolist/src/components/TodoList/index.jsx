import { useEffect, useState } from "react";
import Task from "../Task";
import './style.css'

function TodoList () {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState([]);

  const emptyTask = <span className="EmptyTasks">Nenhuma task criada, adicione sua primeira task!</span>

  const addTodo = (text) => {
    setTasks([...tasks, text]);
  }

  const removeTodo = (ref) => {
    setTasks(tasks.filter((task, index) => index !== ref))
  }

  return (
    <section className="TodoList">
      <header>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button className="success" onClick={() => addTodo(text) }>Add</button>
      </header>

      { tasks.map((text, index) => (
        <Task
          key={index}
          taskId={index}
          description={text}
          removeCallback={removeTodo}
        />
      )) }

      {!tasks.length && emptyTask}
    </section>
  )
}

export default TodoList;