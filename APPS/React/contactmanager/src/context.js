/**
 * PROVIDER FOR THE APPLICATION
 */
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Andriy Polukhin',
        email: 'andriy.polukhin@gmail.com',
        phone: '+38093-357-0119'
      },
      {
        id: 2,
        name: 'Anastasia Tsukrova',
        email: 'anastasia.tsukrova@gmail.com',
        phone: '+480-555-5555'
      },
      {
        id: 3,
        name: 'Alexandra Ivanova',
        email: 'ai@gmail.com',
        phone: '+38093-115-4567'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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