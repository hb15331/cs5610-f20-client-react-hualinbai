import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseNavbarComponent from "./CourseNavbarComponent";


export default class CourseManagerComponent extends React.Component {


    render() {
        return (
            <div>
                <BrowserRouter>

                    <div className = "container">
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/" exact>
                            <CourseListComponent/>
                        </Route>
                        <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>

                        <Route path="/grid" exact>
                            <CourseGridComponent/>
                        </Route>
                    </div>

                    <Route path={["/", "/grid"]} exact component={CourseNavbarComponent}/>

                </BrowserRouter>
            </div>
        )

    }
}