import { Button, Card } from "react-bootstrap";

const ToDoItem = ({ todo, todoDelete }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>제목: {todo.subject}</Card.Title>
        <Card.Text>
          번호: {todo.num}<br/>
          이름: {todo.name}<br/>
          내용: {todo.summary}<br/>
          작성일: {todo.regdate}<br/>
        </Card.Text>
        <Button variant="danger" onClick={() => todoDelete(todo.num)}>
          삭제
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ToDoItem;
