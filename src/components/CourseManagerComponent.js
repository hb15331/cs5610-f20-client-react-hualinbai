import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";

export default class CourseManagerComponent extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>

                    <div className = "container">
                        <Link to="/login">Login</Link> |
                        <Link to="/register">Register</Link> |
                        <Link to="/profile">Profile</Link> |
                        <Link to="/courses">Courses</Link> |
                        <Link to="/edit">Editor</Link>

                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/courses">
                            <CourseListComponent instructor="Jose" term="Fall 2020"/>
                        </Route>
                        <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>

                        <Route path="/grid" exact component={CourseGridComponent}/>


                    </div>
                </BrowserRouter>
            </div>
        )


    }
}