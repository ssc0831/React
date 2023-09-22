import axios from 'axios';
import React from 'react';
import { useState } from "react"
import { Form, Button, Container } from 'react-bootstrap';



const ToDoForm = ({loadContent}) => {
    const [formContent, setFormContent] = useState({
        subject: '',
        summary: ''
    })

const getValue = (e) => {
    setFormContent({
        ...formContent,
        [e.target.name]: e.target.value
    })
}

const insertTodo = () => {
    axios.post('todo/insert',{
        subject: formContent.subject,
        summary: formContent.summary
    }).then((resp) => {
        alert("등록 성공")
        loadContent();
        setFormContent({
            subject: '',
            summary: ''
        })
    })
    
    // fetch('/todo/insert', {
    //     method: 'post',
    //     headers : {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         subject: formContent.subject,
    //         summary: formContent.summary
    //      })
    // })
}

return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="subject" >
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="제목" name="subject"
            onChange={getValue} value={formContent.subject} />
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="summary" >
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" name="summary" rows={3}
            onChange={getValue} value={formContent.summary} />
        </Form.Group>

        <Button variant="primary" onClick={() => insertTodo()}>입력</Button>
      </Form>
    </Container>
  )
}

export default ToDoForm;