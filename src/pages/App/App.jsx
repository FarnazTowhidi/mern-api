
import "./App.css";
import { useState, useEffect } from "react";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
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
        <Route path="/:roomId" element={ChatRoom} />
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders/" element={<OrderHistoryPage />} />
        <Route path="/hotels/" element={<ListHotelPage /> }  />
      </Routes>
      </>
       {/* ): (
       <AuthPage />)} */}
    </main>
  );
}

export default App;
