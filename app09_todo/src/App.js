import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap"

import axios from 'axios';
import TodoForm from './ToDoForm';
import TodoList from './ToDoList';

function App() {

  const [listContent, setListContent] = useState([])

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = () => {
    axios.get('/todo/list')
      .then((resp) => {
        console.log(resp.data)
        setListContent(resp.data)
      })
  }
  const todoDelete = (num) => {
    axios.delete('todo/delete/' + num)   // todo/delete/{num}
      .then((resp) => {
        setListContent(listContent
          .filter(todo => todo.num !== num))
      })
  }
  return (
    <div>
      <Container><h1>To Do</h1></Container>
      <TodoForm loadContent={loadContent} />
      <br /> 
      <TodoList todos={listContent}
      todoDelete={todoDelete} />
    </div>
  );
}

export default App;
