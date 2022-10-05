import React from 'react';
import Navbar from './tools/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 className='text-center'>Hello World</h1>
      </div>
    )
  }
}

export default App;