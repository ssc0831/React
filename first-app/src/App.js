import logo from './logo.svg';
import './App.css';
import Device from "./Device";
import Counter from "./Counter";
import Food from './Food';
import Movie from './Movie';
import Counter2 from "./Counter2";
import MyDevice from './MyDevice';
import MyDevice1 from './MyDevice1';
import MyDevice2 from './MyDevice2';

function App() {
  const mydataApp = {
    "myDeviceData" : [
        {
            name : "갤럭시",
            RAM : "6GB",
            HomeButton : false,
            TouchID : "no",
            FaceID : "no"
        },
        
        {
          name : "갤럭시 s22",
          RAM : "10GB",
          HomeButton : true,
          TouchID : "yes",
          FaceID : "yes"
      },

      {
        name : "갤럭시 s21",
        RAM : "8GB",
        HomeButton : true,
        TouchID : "yes",
        FaceID : "yes"
      },

      {
        name : "갤럭시s23",
        RAM : "16GB",
        HomeButton : true,
        TouchID : "yes",
        FaceID : "yes"
      }
       
    ]
}
  return (
    <div>
      <h3>Counter2 클래스 화살표 함수</h3>
      <Counter2 />
      <hr/>
      <h4>MyDevice 컴포넌트</h4>
      <MyDevice mydata={mydataApp} />
      <hr/>
      <h4>MyDevice1 클래스 컴포넌트</h4>
      <MyDevice1 mydata={mydataApp.myDeviceData} />
      <hr/>
      <h4>MyDevice2 함수형 컴포넌트</h4>
      <MyDevice2 mydata={mydataApp.myDeviceData} />
      <hr/>
      <Movie title = "영화1" />
      <Movie title = "영화2" />
      <Movie title = "영화3" />
      <Movie title = "영화4" /> 
      <hr/>
      <h1>안녕</h1>
      <h2>안녕</h2>
      <Device />
      <Counter />
      <Food /> 
    </div>
  );
}

export default App;
