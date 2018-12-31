import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  }

  onChange = (e) => {
    console.log(e.target.value);
    this.props.onChange(this.state.value);
    this.setState({
      value: e.target.value
    });
  }
  render() {
    return (
      <div className="range">
        <input
          type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Range;
