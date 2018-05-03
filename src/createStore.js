import reducer from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux"

import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;

// export default function createStore(reducer) {
//
//   function dispatch(action) {
//     state = reducer(state, action);
//     console.log(`the state is ${state.userID}`);
//     console.log(`the action is ${action.type}`);
//     render();
//   };
//
//   function getState() {
//     return state;
//   }
//
//   return {
//     dispatch,
//     getState
//   };
//
// };//endofcreateStore
