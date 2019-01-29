import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
        <FunctionalComponentDemo/>
          <Sidebar />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
