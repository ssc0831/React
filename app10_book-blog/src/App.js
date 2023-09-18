import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {

  const [posts, setPosts] = useState([]);

    
    const listPost = () => {
        axios.get('/post/list')
        .then((resp) => {
            console.log(resp);
            setPosts(resp.data)
        })
    }
    useEffect(() => {
      listPost()
  },[])

  return (
    <BrowserRouter >
      <MainTitleText>SS7 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/postWrite' element={<PostWritePage/>}/>
        <Route path='/post/:postId' element={<PostViewPage posts={posts}/>}/>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
