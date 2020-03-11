import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import './index.css';
import Navbar  from './components/navbar.js';
import App from './App';
import LoginPanel from './components/login.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
<Navbar/> 
<LoginPanel/>
<App/>
</div>, 

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
