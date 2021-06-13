//this is what declares this as a react
import React from 'react';
//u render a react related app to the html element
import {render} from 'react-dom';

import App from './App';
//this h1 is a jsx tag no diff to the html one
render(<App/>, document.getElementById('app'));
