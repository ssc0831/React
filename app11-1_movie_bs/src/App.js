import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import Poster from "./routers/Poster";
import Detail from "./routers/Detail";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element ={<Home />}> </Route>
        <Route path={"/about"} element ={<About />}> </Route>
        <Route path={"/poster"} element ={<Poster />}> </Route>
        <Route path={"/detail"} element={<Detail />} />
      </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;