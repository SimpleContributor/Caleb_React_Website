import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)

export default Main;