import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import * as serviceWorker from './serviceWorker';
import CourseManagerComponent from "./components/CourseManagerComponent";

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import HelloContainer from "./containers/HelloContainer";
import CounterContainer from "./containers/CounterContainer";
import fsm from "./reducers/fsm";
import widgetsReducer from "./reducers/widgetsReducer";
import WidgetListContainer from "./containers/WidgetListContainer";


// all the states are stored in Redux store
//const store = createStore(fsm)
const reducers = combineReducers({
    fsm: fsm,
    widgetsReducer: widgetsReducer
})
const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
        <HelloContainer/>
        <CounterContainer/>
        <WidgetListContainer/>
    </Provider>,
    //<CourseManagerComponent/>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
