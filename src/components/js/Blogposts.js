import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post1 from './Post1.js';
import Post2 from './Post2.js';
import Post3 from './Post3.js';
import Home from '../../container/js/home';

class Blogposts extends Component{
    render() {
        return (
            <Router>
            <div>
               <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Post1" component={Post1} />
                    <Route path="/Post2" component={Post2} />
                    <Route path="/Post3" component={Post3} />

                </Switch>
            </div>
            </Router>
        )
    }
}

export default Blogposts;
