import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'
import SignIn from './SignIn'

class App extends React.Component {
    render() {
        return(
            <Router history={browserHistory} >
                <div>
                    <Route exact path="/" component={SignIn}/>
                </div>
            </Router>
        )
    }
}

export default App;