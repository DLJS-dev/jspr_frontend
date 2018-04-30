import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createStore from "./createStore";
import currentUser from "./reducers/currentUser";


const store = createStore(currentUser)
//
// export function render() {
//
//   ReactDOM.render(
//     <App />,
//
//     document.getElementById('root')
//   );
//
// }
//
// render();

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });

registerServiceWorker();
