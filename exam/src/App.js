import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap"
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';

import axios from 'axios';
import TodoList from './ToDoList';
import Header from './component/Header';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';


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

  const todoModify = (num) => {
    axios.put('todo/modify/' + num)
    .then((resp) => {
      alert("수정 완료")
    })
  }


  return (
    <div>
      <Header /><br/>
      <Container><h1>To Do</h1></Container>
      <ToDoForm loadContent={loadContent} />
      <br /> 
      <TodoList todos={listContent}
      todoDelete={todoDelete}  todoModify={todoModify} />
    </div>
  );
}

export default App;