import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';

import Films from './Films/Films';
import SingleFilm from './Films/SingleFilm';

import People from './People/People';
import Person from './People/Person';


class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/films' component={Films} />
                        <Route exact path='/films/:id' component={SingleFilm} />
                        <Route exact path='/people' component={People} />
                        <Route exact path='/people/:id' component={Person} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default App;