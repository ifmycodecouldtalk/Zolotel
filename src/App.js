import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './tools/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
}

export default App;