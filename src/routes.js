import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Marvin from './pages/404';

export default function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sera/que" component={Marvin} />
            </Switch>
        </BrowserRouter>
    )
}


