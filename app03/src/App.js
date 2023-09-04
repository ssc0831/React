import { Component } from "react";
import './App.css';
import CommentList from './CommentList';
import Form from "./Component/Form";
import TodoItemList from "./Component/TodoItemList";
import TodoListTemplate from "./Component/TodoListTemplate";
import NotificationList from "./NotificationList";

class App extends Component {
  id = 4;
  state = {
    input : '',
    todos : [
      {id: 0, text: '치킨먹기1', checked: false },
      {id: 1, text: '치킨먹기2', checked: true},
      {id: 2, text: '치킨먹기3', checked: false},
      {id: 3, text: '치킨먹기4', checked: true}
    ]
  }

  handleChange = e =>{
    this.setState({
      input    : e.target.value
    })
  }
  //추가
  handleCreate = ()=>{
    const {input, todos} = this.state
    this.setState({
      input : '',
      todos : todos.concat({
        id: this.id++,
        text : input,
        checked : false
      })
    })

  }
  //삭제
  handelRemove = id =>{
   // console.log("handelRemove id : " + id)
   const {todos} = this.state
   const nextTodos = todos.filter(todo => todo.id !==id)

   this.setState({
    todos : nextTodos
   })
  }
  //토글
  handelToggle = (id) =>{
    //console.log(" handelToggle id : " + id)
    const {todos} = this.state

    const index = todos.findIndex(todo => todo.id === id)
    const selected = todos[index] //선택된 객체   {id: 1, text: '치킨먹기2', checked: true},

    const nextTodos = [...todos]
    nextTodos[index] ={
      ...selected,
      checked : !selected.checked
    }
    this.setState({
      todos : nextTodos
    })
  }
  //입력하고 엔터키
  handleKeyPress = e =>{
    if(e.key === 'Enter'){
      this.handleCreate()
    }

  }

  render(){
    return (
      <div>
        {/* <CommentList /> */}
        {/* <TodoListTemplate 
          form ={
            <Form  value={this.state.input} 
            onKeyPress ={this.handleKeyPress}
            onChange = {this.handleChange}
            onCreate ={this.handleCreate}
            />
          }
        >
  
          <TodoItemList  
          todos ={this.state.todos}
          onRemove = {this.handelRemove}
          onToggle = {this.handelToggle} />
  
  
         </TodoListTemplate>  */}
         <NotificationList />
      </div>
    );
  }
 
}

export default App;
