import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from '../node_modules/react-router';
import Portfolio from './App';
import './index.css';


ReactDOM.render(
  <Portfolio history={browserHistory} />,
  document.getElementById('root')
);

