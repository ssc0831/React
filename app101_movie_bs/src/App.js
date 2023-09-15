
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import Home from './routers/Home';
import Navigation from './routers/Navigation';
import About from './routers/About';
import Detail from './routers/Detail';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
      <Routes>
      <Route path={"/"} element ={<Home />}>  </Route>
      <Route path={"/about"} element ={<About />}>  </Route>
      <Route path={"/detail"} element ={<Detail />}>  </Route> 
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
