import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../routes/petition';
console.log(routes);
// const store = configureStore(window.__INITIAL_STATE__);
// const dest = document.getElementById('root');

// render((
//   <Provider store={store}>
//     <Router history={history} routes={routes} />
//   </Provider>
// ), dest);

// if (process.env.NODE_ENV !== 'production') {
//   window.React = React; // enable debugger

//   if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
//     console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
//   }
// }
var el = document.getElementById('root')
render(<Router history={history} routes={routes} />,el);

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
