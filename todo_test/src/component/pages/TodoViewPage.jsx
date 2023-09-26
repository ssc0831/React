import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';

const TodoViewPage = () => {
  const {todoId} = useParams();
  const [todo, setTodo] = useState({
    title : '',
    content : ''
  })
  const getTodo = async()=>{
    try{
      const resp = await axios.get(`/todo/view/${todoId}`);
      console.log(resp);
      setTodo({
        title : resp.data.title,
        content : resp.data.content
      })
    }catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{getTodo()},[])
  return (
    <Container>
      <h1>할 일 !!</h1>
      <hr/>
      <h3>{todo.title}</h3>
      <hr/>
      <div>{todo.content}</div>
    </Container>
  );
};

export default TodoViewPage;