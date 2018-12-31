import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    }, () => {
      console.log('hello')
      // this.props.onChange(this.state.value)
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Text;