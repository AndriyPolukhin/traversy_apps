import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <div>
        <Select>
          <option value="0">Select</option>
        </Select>
      </div>
    );
  }
}

export default Select;