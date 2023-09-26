import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TodoItem from './TodoItem';

const TodoList = ({todos,onClickUpdate,onClickDelete}) => {
  return (
    <div>
      {
        todos.map((item)=>{
          return(
            <TodoItem key={item.id} item={item} 
                                    onClickUpdate={()=>{onClickUpdate(item)}}
                                    onClickDelete={()=>{onClickDelete(item)}}/>
          )
        })
      }
    </div>
  );
};

export default TodoList;