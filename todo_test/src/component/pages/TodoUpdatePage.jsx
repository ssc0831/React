import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const TodoUpdatePage = () => {
  const {todoId} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    title : location.state.title,
    content : location.state.content
  });
  const getValue = (e)=>{
    setTodo({
      ...todo,
      [e.target.name] : e.target.value
    })
  }
  const updateTodo = async()=>{
    try{
      await axios.put(`/todo/update/${todoId}`,{title:todo.title,content:todo.content});
      navigate("/");
    }catch(e){
      console.log(e);
    }
  }
  return (
    <Container>
      <h1>할 일 수정!</h1>
      <hr/>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ConterolTitle">
          <Form.Label><b>제목</b></Form.Label>
          <Form.Control type="text" placeholder="제목" name="title" value={todo.title} onChange={getValue} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ConterolContent">
          <Form.Label><b>내용</b></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="내용" name="content" value={todo.content} onChange={getValue} />
        </Form.Group>
        <Button variant="primary" onClick={updateTodo}>수정하기</Button>
      </Form>
    </Container>
  );
};

export default TodoUpdatePage;