import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import BoardForm from './BoardForm';
import BoardList from './BoardList';

function App() {
  const [listContent, setListContent] = useState([])

    useEffect(() => {
        listBoard()
    },[])
  
  // 전체보기
  const listBoard = () => {
    axios.get("api/list").then((resp) => {
      console.log(resp)
      setListContent(resp.data);
    })
  }

  // 삭제
  const deleteBoard = (num) => {
    axios.delete("/api/delete/" + num)
    .then(() => {
      alert('삭제성공');
      setListContent(listContent.filter(board => board.num !== num))
    })
  }

  return (
    <div style={{paddingLeft:"20px"}}>
      <h1>app07_SimpleBoard</h1>
      <hr/>
      <BoardForm listBoard={listBoard} />
      <hr/>
      <BoardList lists={listContent} 
      deleteBoard={deleteBoard}/>
    </div>
  );
}
export default App;