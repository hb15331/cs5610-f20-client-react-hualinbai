import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css"
import CourseListComponent from "./components/CourseListComponent";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(


    <div className = "container">
        <CourseListComponent instructor = "Hualin Bai" term = "Fall 2020"/>
    </div>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
