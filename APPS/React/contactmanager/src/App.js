import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">

        <Contact
          name="Andriy Polukhin"
          email="andriy.polukhin@gmail.com"
          phone="093-357-0119"
        />
        <Contact
          name="Anastasia Tsukrova"
          email="anastasia.tsukrova@gmail.com"
          phone="480-555-5555"
        />
        </div>
      </div>
    );
  }
}

export default App;
