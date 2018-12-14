import React, { Component } from 'react'
import { PropTypes } from 'prop-types';
import AddContact from './../contacts/AddContact';

class Test extends Component {

  state = {
    title: '',
    body: '',
    url: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body,
        url: data.url
      }));
  }



  render() {
    const { title, body, url } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <a href="{url}">Link</a>
      </div>
    )
  }
}

export default Test;