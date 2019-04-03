// routes.jsx
import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom';

import Home from '../components/pages/home'
import Contact from '../components/pages/contact'
import {NotFound} from '../components/pages/not-found'
/*
import Feed from './components/pages/feedComponent';
import Card from './components/pages/cardComponent';
import HSL from './components/pages/hsl'
import RGB from './components/pages/rgb'
import Yellow from './components/pages/yellow'
*/



const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            
            <Route component={NotFound} />
        </Switch>
    </Router> )

export default Routes