import React, { Component } from 'react';
import './App.css';

const uuid = require('uuid');
const firebase = require('firebase');

var config = {
  apiKey: " ",
  authDomain: " ",
  databaseURL: " ",
  projectId: "",
  storageBucket: " ",
  messagingSenderId: ""
};
firebase.initializeApp(config);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v1(),
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted: false
    }
  }

  handleNameSubmit = (e) => {
    e.preventDefault();
    var name = this.refs.name.value;
    this.setState({
      name: name
    });
  }

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    console.log('Questions Submitting...');
    firebase.database().ref('surveys/' + this.state.id).set({
      name: this.state.name,
      answers: this.state.answers
    });
    this.setState({
      submitted: true
    }, () => console.log('Questions Submitted...'));
  }

  handleQuestionChange = (e) => {
    var answers = this.state.answers;
    if (e.target.name === 'q1') {
      answers.q1 = e.target.value;
    } else if (e.target.name === 'q2') {
      answers.q2 = e.target.value;
    } else if (e.target.name === 'q3') {
      answers.q3 = e.target.value;
    } else if (e.target.name === 'q4') {
      answers.q4 = e.target.value;
    }
    this.setState({ answers: answers }, () => console.log(this.state));
  }

  render() {
    var user;
    var questions;

    if (this.state.name && this.state.submitted === false) {
      user = <h2>Welcome {this.state.name}</h2>
      questions = <span>
        <h3>Survey Questions</h3>
        <form onSubmit={this.handleQuestionSubmit}>
          <div>
            <label>What is your favorite operating system:</label><br />
            <input type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange} />Windows <br />
            <input type="radio" name="q1" value="OSX" onChange={this.handleQuestionChange} />OSX <br />
            <input type="radio" name="q1" value="Linux" onChange={this.handleQuestionChange} />Linux <br />
            <input type="radio" name="q1" value="Solaris" onChange={this.handleQuestionChange} />Solaris <br />
            <input type="radio" name="q1" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite brand of TV:</label><br />
            <input type="radio" name="q2" value="Sony" onChange={this.handleQuestionChange} />Sony <br />
            <input type="radio" name="q2" value="Samsung" onChange={this.handleQuestionChange} />Samsung <br />
            <input type="radio" name="q2" value="Panasonic" onChange={this.handleQuestionChange} />Panasonic <br />
            <input type="radio" name="q2" value="Vizio" onChange={this.handleQuestionChange} />Vizio <br />
            <input type="radio" name="q2" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite Smartphone Brand:</label><br />
            <input type="radio" name="q3" value="Apple" onChange={this.handleQuestionChange} />Apple <br />
            <input type="radio" name="q3" value="Samsung" onChange={this.handleQuestionChange} />Samsung <br />
            <input type="radio" name="q3" value="Nexus" onChange={this.handleQuestionChange} />Nexus <br />
            <input type="radio" name="q3" value="Blackberry" onChange={this.handleQuestionChange} />Blackberry<br />
            <input type="radio" name="q3" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <div>
            <label>What is your favorite CPU Brand:</label><br />
            <input type="radio" name="q4" value="Intel" onChange={this.handleQuestionChange} />Intel <br />
            <input type="radio" name="q4" value="AMD" onChange={this.handleQuestionChange} />AMD <br />
            <input type="radio" name="q4" value="Nvidia" onChange={this.handleQuestionChange} />Nvidia <br />
            <input type="radio" name="q4" value="ARM" onChange={this.handleQuestionChange} />ARM <br />
            <input type="radio" name="q4" value="Other" onChange={this.handleQuestionChange} />Other <br />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </span>
    } else if (!this.state.name && this.state.submitted === false) {
      user = <span>
        <h2>Please enter your name to begin the survey</h2>
        <form onSubmit={this.handleNameSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            ref="name"
          />
        </form>
      </span>;
      questions = '';
    } else if (this.state.submitted) {
      user = <h2>Thank you {this.state.name}</h2>
    }

    return (
      <div className="App">
        <div className="App-header text-center">
          <h2>Simple Survey</h2>
        </div>
        <div className="text-center">
          {user}
        </div>
        <div className="container">
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
