import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>

      <Navigation />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;