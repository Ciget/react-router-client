import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Route, IndexRoute } from 'react-router';
// import AddPetition from '../components/addPetition';
// import ViewPetition from '../components/viewPetition';
 //import initialView from '../components/initialView';

var el = document.getElementById('root')
class initialView extends React.Component {
  render() {
    return <div>
            <h1>Hello</h1>
            // <Link to={`/add`}>Add</Link>
            // <Link to={`/view`}>View</Link>
            </div>
  }
};
render(<initialView />, el);