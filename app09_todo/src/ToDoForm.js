import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import axios from "axios";

const ToDoForm = ({ loadContent }) => {

  const [formContent, setFormContent] = useState({
    subject: '',
    name: '',
    summary: ''
  })

  const getValue = (e) => {
    setFormContent({
      ...formContent,
      [e.target.name]: e.target.value
    })
  }

  const submitTodo = () => {
    axios.post('/todo/insert', {
      subject: formContent.subject,
      name: formContent.name,
      summary: formContent.summary
    }).then((resp) => {
      // console.log(resp)
      alert("등록 성공");
      loadContent();
      setFormContent({
        subject: '',
        name: '',
        summary: ''
      })
    })

    // const insertTodo = (todo) => {
    //   axios.post('/todo/insert', {
    //     subject: todo.subject,
    //     name: todo.name,
    //     summary: todo.summary
    //   }).then((resp) => {
    //     alert("등록 완료");
    //     setListContent(listContent.concat(
    //       {num : resp.data.num,
    //         name : todo.name,
    //         subject : todo.subject,
    //         summary : todo.summary,
    //         ...listContent})
    //       )
    //   })
    // }    

    const insertTodo = (todo) =>{
    fetch('/todo/insert', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        subject: formContent.subject,
        name: formContent.name,
        summary: formContent.summary
      })
    })
      .then((resp) => {
        alert("등록 성공!!!!");
        loadContent();
        setFormContent({
          subject: '',
          name: '',
          summary: ''
        })
      })
    }
  }
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="subject" >
          <Form.Label>subject</Form.Label>
          <Form.Control type="text" placeholder="subject" name="subject"
            onChange={getValue} value={formContent.subject} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name" >
          <Form.Label>name</Form.Label>
          <Form.Control type="text" placeholder="name" name="name"
            onChange={getValue} value={formContent.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="summary" >
          <Form.Label>summary</Form.Label>
          <Form.Control as="textarea" name="summary" rows={3}
            onChange={getValue} value={formContent.summary} />
        </Form.Group>
        <Button variant="primary" onClick={submitTodo}>전송</Button>
        <Button variant="success" onClick={insertTodo}>추가</Button>
      </Form>

    </Container>
  )
}

export default ToDoForm;
