import React, { Component } from 'react';
import { HashRouter,  Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../../components/navigation';
import Home from '../../components/home';
import About from '../../components/about';
import Contact from '../../components/contact';
import Portfolio from '../../components/portfolio';
import Resume from '../../components/resume';

class Header extends Component {
    render() {
    return (
        <HashRouter>      
            <div id="header" className="row">
                <Navigation />
            </div>
            <div className="content">
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/home/"/>)} />
                <Route path="/home"component={Home} /> 
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />
            </Switch>
            </div>
        </HashRouter>
        )
    }
}

export default Header;