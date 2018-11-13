/**
 * THIS IS THE TOP COMPONENT FOR THE PAGE
 */
// use rce shortcut
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  // 1. Create state and fields
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  // 2. CREATE METHODS
  // 2.1. Proceed to the next sterp
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // 2.2. Go Back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // 2.3 Handle Fields Change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  render() {
    // 3. Add the variables that will be used in the components
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return <Success />
    }
  }
}

export default UserForm
