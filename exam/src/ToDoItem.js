import { Button, Card } from "react-bootstrap";

const ToDoItem = ({ todo, todoDelete, todoModify }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>제목: {todo.subject}</Card.Title>
        <Card.Text>
          번호: {todo.num}<br/>
          내용: {todo.summary}<br/> 
        </Card.Text>
        <Button variant="danger" onClick={() => todoDelete(todo.num)}>
          삭제
        </Button>&nbsp;
        <Button variant="warning" onClick={() => todoModify(todo.num)}>
        수정
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ToDoItem;
