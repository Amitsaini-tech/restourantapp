import React from 'react';
import  ReactDOM  from 'react-dom';
import "./index.css";

import App from './utils/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './Contexts/StateProvider';
import { initialState } from './Contexts/initialState';
import reducer from './Contexts/reducer';

ReactDOM.render ( 
<Router>
    <StateProvider initialState = {initialState} reducer= {reducer}>
      <App/>  
    </StateProvider>
 
</Router>,
 document.getElementById("root"));
