import { Col, Container, Row } from "react-bootstrap";
import ToDoItem from "./ToDoItem";


const TodoList = ({ todos, todoDelete, todoModify }) => {
  return (
    <Container>
      <Row>
        {
          todos && todos.map((todo, index) => (
            <Col md={4} key={index}>
              <ToDoItem key={todo.num}
                todo={todo}
                todoDelete={todoDelete}
                todoModify={todoModify} />
              <br />
            </Col>

          ))
        }

      </Row>

    </Container>
  )
}

export default TodoList;