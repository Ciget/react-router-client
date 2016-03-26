import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Route, IndexRoute } from 'react-router';
import {InitialView} from '../components/initialView';
import {AddPetition} from '../components/AddPetition';

var el = document.getElementById('root')

render((<Router history={browserHistory}>
        <Route path="/" component={InitialView}>
            <Route path="/add" component={AddPetition}/>
        </Route>
</Router> ),el);

// if (process.env.CLIENT) {
//   render(
//     <Provider store={store} key="provider">
//       <div>
//         <Router history={history} routes={routes} />
//         <DevTools />
//       </div>
//     </Provider>,
//     dest
//   );
// }
