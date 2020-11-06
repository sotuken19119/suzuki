  
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import End from './End';
import Start from './Start';
import NotFound from './404';
import firebase from 'firebase';
import { firebaseConfig } from './firebase/config.js';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDb = firebaseApp.database();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={End} />
          <Route path="/Start"  component={Start} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();