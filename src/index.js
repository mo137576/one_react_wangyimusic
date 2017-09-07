import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "../container/Home/index";
import '../common/index.less'
import Middle from "../container/MiddlePage/index";
import Login from "../container/Login/index";
import Change from "../container/Change/index";
import Logon from "../container/Logon/index";
/*import {ConnectedRouter,routerReducer,routerMiddleware,push} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history=createHistory();
import {Provider} from 'react-redux';*/

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/MiddlePage/index" component={Middle}/>
            <Route path="/Login/index" component={Login}/>
            <Route path="/Login/Change" component={Change}/>
            <Route path="/logon/index" component={Logon}/>
        </Switch>
    </Router>,document.querySelector('#root')
)