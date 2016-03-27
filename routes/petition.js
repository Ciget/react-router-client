import { Route, IndexRoute } from 'react-router';
import React from 'react';
import {AddPetition} from '../components/addPetition';
import {ViewPetition} from '../components/viewPetition';
import {App} from '../components/App';
import { render } from 'react-dom';

export const routes = (
<Route path="/" component={App}>
     <Route path="/add" component={AddPetition}/>
    <Route path="/view" component={ViewPetition}/>
</Route>);