import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import Navigation from './component/navigation/Navigation';
import TodoWritePage from './component/pages/TodoWritePage';
import TodoViewPage from './component/pages/TodoViewPage';
import TodoUpdatePage from './component/pages/TodoUpdatePage';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/writeTodo' element={<TodoWritePage/>}></Route>
        <Route path='/viewTodo/:todoId' element={<TodoViewPage/>}></Route>
        <Route path='/update/:todoId' element={<TodoUpdatePage/>}></Route>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
