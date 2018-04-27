import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createStore from "./createStore";

// const store = createStore(XXXXXXreducerXXXXXXXXX)

export function render() {

  ReactDOM.render(
    <App />,

    document.getElementById('root')
  );

}

render();

registerServiceWorker();
