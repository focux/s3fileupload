import React, { Component } from 'react';
import '../Bootstrap.css';

export default class Form extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('upload')
  }

  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.onSubmit} className="form">
        <label htmlFor="fullname">Full name</label>
          <input type="text" id="fullname" name="fullname" placeholder="Full name" />
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="E-mail" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
