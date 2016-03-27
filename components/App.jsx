import React from 'react';
import { Router, Route, Link } from 'react-router'
 
export class App extends React.Component {
  render() {
    return <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/view">View</Link></li>
        </ul>
        {this.props.children}
      </div>;
  }
};