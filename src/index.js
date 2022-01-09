import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import SubPageLayout from './layouts/SubPage';
import './index.css';

// constants
import { SubPageInfo } from './constants/constants';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          {/* <Route 
            path="/About"
            component={() => (<SubPageLayout {...SubPageInfo.find(element => 
              element.id === 0
              )} />)}
          />
          <Route 
            path="/Create"
            component={() => (<SubPageLayout {...SubPageInfo.find(element => 
              element.id === 1
              )} />)}
          />
          <Route 
            path="/Collect"
            component={() => (<SubPageLayout {...SubPageInfo.find(element => 
              element.id === 2
              )} />)}
          />
          <Route 
            path="/Curate"
            component={() => (<SubPageLayout {...SubPageInfo.find(element => 
              element.id === 3
              )} />)}
          /> */}
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
