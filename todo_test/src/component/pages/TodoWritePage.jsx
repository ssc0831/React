import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';

const TodoWritePage = () => {
  const navigate = useNavigate();
  const [todo,setTodo] = useState({
    title:'',
    content:''
  })
  const getValue = (e)=>{
    setTodo({
      ...todo,
      [e.target.name] : e.target.value
    })
  }
  const saveTodo = async()=>{
    try{
      await axios.put("/todo/todoWrite",{title:todo.title,content:todo.content})
      navigate("/");
    }catch(e){
      console.log(e);
    }
  }
  return (
    <Container>
      <h1>Todo 쓰기!!</h1>
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
        <Button variant="primary" onClick={saveTodo}>입력</Button>
      </Form>
    </Container>
  );
};

export default TodoWritePage;