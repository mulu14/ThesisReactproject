import React, { Component } from 'react';
import Profile from './components/Profile'; 
import Footer from './footer/footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="app-header">
          <h1 className="app-title">Demando Admin</h1>
        </header>
        <div className="profile">
        <Profile/>
        </div>
        <div className="appbody">
          <h1> Application Body</h1>
        </div>
        <div className="footer"> 
            <Footer/>   
        </div>
      
      </div>
    );
  }
}

export default App;
