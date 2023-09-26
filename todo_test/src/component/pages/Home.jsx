import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TodoList from '../list/TodoList';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

const Home = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const getTodoList = async ()=>{
    try{
      const response = await axios.get("/todo/todoList")
      setTodoList(response.data);
    }catch(e){

    }
  }
  useEffect(()=>{getTodoList()},[])
  return (
    <Container>
      <h1>할 일 목록</h1>
      <hr/>
      <TodoList todos={todoList} 
                onClickUpdate={(item)=>{navigate(`/update/${item.id}`,{state:{...item}})}}
                onClickDelete={
                   async (item)=>{
                    try{
                      await axios.delete(`/todo/delete/${item.id}`)
                      setTodoList(todoList.filter(todo=>todo.id!=item.id))
                      alert("삭제되었습니다")
                    }catch(e){
                      console.log(e);
                    }
                  }
                }/>
    </Container>
  );
};

export default Home;