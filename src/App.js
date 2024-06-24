import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/chatroom"} element={<ChatRoom/>}/>

        </Routes>
    </div>
  );
}

export default App;
