import 'babel-polyfill'; //some components of es6 can be converted to es5, so polyfill is required to create those components, one such component is object.assign
import React from 'react';
import {render} from 'react-dom';
import './styles/styles.css'; //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import HomePage from './components/HomePage';

render(
   <HomePage></HomePage>
    ,
    document.getElementById('app')
);


