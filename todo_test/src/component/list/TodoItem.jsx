import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './TodoItem.css';

const TodoItem = ({item, onClickUpdate,onClickDelete}) => {
  return (
    <div>
      <Link to={`/viewTodo/${item.id}`}>{item.title}</Link>
      <Button className='itembutton' variant="primary" onClick={onClickUpdate} >수정</Button>
      <Button className='itembutton' variant="danger" onClick={onClickDelete} >삭제</Button>
      <hr/>
    </div>
  );
};

export default TodoItem;