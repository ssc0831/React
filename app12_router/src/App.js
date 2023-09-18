import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import Topic from './Topic';
import Topics from './Topics';
import Login from './Login';
import LoginResult from './LoginResult';
// import Topic from './Topic1';

function App() {
  const contents = [
    {id : 1, title : 'Java', desc : "Java는 프로그래밍 언어"},
    {id : 2, title : 'HTML', desc : "HTML은 마크업 언어"},
    {id : 3, title : 'SQL', desc : "SQL은 데이터 베이스 언어"}
  ]

  return (
    <BrowserRouter>
      <div>
        <h1>react router dom Example</h1>
      </div>
      <Navigation />
      <Routes>
      <Route path='/' element={<Home />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        {/* <Route path='/topics' element={<Topics1 contents={contents} />}></Route> */}
        <Route path='/topics' element={<Topics contents={contents} />}>
        {/* 하위 주소를 입력받을 때 해당 Route안에 Route를 포함시킬수 있다. 
        /topics/1/, /topics/2/, /topics/3/ */}
        <Route path=':id' element={<Topic contents={contents}/>}> </Route>
        </Route>
        <Route path='/login' element={<Login />}>
        {/* /login/result/id1/pw1/, /login/result/id2/pw2/, /login/result/id3/pw3/ ... */}
          <Route path='result/:id/:pw' element={<LoginResult />}></Route>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
