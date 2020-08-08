import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Marvin from './pages/404';
import CadastrarVideo from './pages/Cadastro/Video';
import CadastrarCategoria from './pages/Cadastro/Categoria';

export default function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro/video" component={CadastrarVideo} />
                <Route path="/cadastro/categoria" component={CadastrarCategoria} />
                <Route component={Marvin} />
            </Switch>
        </BrowserRouter>
    )
}


