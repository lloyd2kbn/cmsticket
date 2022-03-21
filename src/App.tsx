import React from 'react';
import './App.scss';
import CheckTicket from './pages/CheckTicket';
import Home from './pages/Home';
import SettingTicket from './pages/SettingTicket';
import TicketManager from './pages/TicketManager';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/ticketmanager' element={<TicketManager/>}></Route>
              <Route path='/checkticket' element={<CheckTicket/>}></Route>
              <Route path='/settingticket' element={<SettingTicket/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
