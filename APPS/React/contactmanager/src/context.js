/**
 * THIS IS THE PROVIDER FOR THE APPLICATION
 */

import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    default:
      return state;
  }
}


export class Provider extends Component {
  // GLOBAL STATE
  state = {
    contacts: [
      {
        id: 1,
        name: 'Andriy Polukhin',
        email: 'andriy.polukhin@gmail.com',
        phone: '093-357-0119'
      },
      {
        id: 2,
        name: 'Anastasia Tsukrova',
        email: 'a.tsukrova@gmail.com',
        phone: '093-862-0117'
      },
      {
        id: 3,
        name: 'Alexandra Ivanova',
        email: 'ai007@gmail.com',
        phone: '321-000-7777'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
