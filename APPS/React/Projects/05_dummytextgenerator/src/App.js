import React, { Component } from 'react';
import Output from './components/Output';
import Text from './components/controls/Text';
import Select from './components/controls/Select';

import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getText();
  }

  getText() {
    axios.get('https://cors-anywhere.herokuapp.com/http://hipsterjesus.com/api?paras=' + this.state.paras + '&html=' + this.state.html)
      .then((response) => {
        this.setState({
          text: response.data.text
        }, () => console.log(this.state)
        )
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <h1>DummyText Generator</h1>
        <Output
          value={this.state.text}
        />
        <h3>Real Time Options</h3>
        <form>
          <div>
            <label>Paragraphs: </label>
            <Text
              value={this.state.paras}
            />
          </div>
          <div>
            <label>Include HTML: </label>
            <Select
              value={this.state.html}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
