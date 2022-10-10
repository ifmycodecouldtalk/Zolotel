import React from 'react';
import { Outlet, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './tools/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import AuthService from "./services/auth.service";
import EventBus from "./tools/EventBus";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <Outlet />
      </div>
    )
  }
}

export default App;