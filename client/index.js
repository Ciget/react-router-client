import * as React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Route, IndexRoute } from 'react-router';
import {routes} from '../routes/petition';

var el = document.getElementById('root')
render(<Router history={browserHistory} routes={routes}/>,el);
