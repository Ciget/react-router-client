import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
 
export class InitialView extends React.Component {
  render() {
    return <div> <h1>Hello</h1>
    <Link to={`/add`}>Add</Link>
            </div>;
  }
};