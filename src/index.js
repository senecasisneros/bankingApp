'use strict';

import React from 'react';
import { render }  from 'react-dom';
import { Router, Route,browserHistory }  from 'react-router';

import App  from './components/App';



render(
  <App />,
  document.getElementById('root')
);
