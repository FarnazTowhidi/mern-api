
import "./App.css";
import { useState, useEffect } from "react";
import ListHotelPage from "../ListHotelPage/ListHotelPage";
import Home from "../Home/Home";
import ChatRoom from "../ChatRoom/ChatRoom";
import AuthPage from "../AuthPage/AuthPage";

import { Routes,Route } from 'react-router-dom';
import NavBar from "../../components/NavBar/NavBar";


function App() {
  const [user,setUser] = useState(null)
  
  return (
    <main className="App">
       <NavBar /> 
      {/* { user ? ( */}
      <>     
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/chat/<int:roomId>" element={<ChatRoom />}  />
        <Route path="/chat/" element={<ChatRoom />}  />
        <Route path="/hotels/" element={<ListHotelPage />}  />
      </Routes>
      </>
       {/* ): (
       <AuthPage />)} */}
    </main>
  );
}

export default App;
