import React from 'react'
import {BrowserRouter as Router,Route, Switch ,Redirect, Link} from 'react-router-dom'
import Main from '../../pages/Main'
import About from '../../pages/About'
import Nav from '../navbar/Navbar'
import Gallery from '../../pages/Gallery'

const RouteHandler = () => {
    return (
        <div>
        <Router>
            <Nav />
            <Route path="/" component={Main} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/gallery" component={Gallery} exact/>
        </Router>
        </div>
    )
}
export default RouteHandler
