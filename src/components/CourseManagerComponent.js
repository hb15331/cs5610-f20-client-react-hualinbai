import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";
import {deleteCourse, findAllCourses} from "../services/CourseService";
import CourseNavbarComponent from "./CourseNavbarComponent";

export default class CourseManagerComponent extends React.Component {

    state = {
        // maintain the local state of array
        // pass the same state of courses to table or grid component
        courses: []
    }

    // componentDidMount() {
    //     findAllCourses()
    //         .then(courses => {
    //             this.setState({
    //                 courses: courses
    //             })
    //         })
    // }

    // deleteCourse = (course) => {
    //     deleteCourse(course._id)
    //         .then(status => this.setState(prevState => ({
    //                 // create a new array of courses, where the course that matches
    //                 // the specified id is removed
    //                 courses: prevState.courses.filter(c => c._id !== course._id)
    //             })
    //         ))
    // }


    render() {
        return (
            <div>
                <BrowserRouter>

                    <div className = "container">
                        {/*<Link to="/login">Login</Link> |*/}
                        {/*<Link to="/register">Register</Link> |*/}
                        {/*<Link to="/profile">Profile</Link> |*/}
                        {/*<Link to="/courses">Courses</Link>*/}

                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/" exact>
                            <CourseListComponent
                                instructor="Jose"
                                term="Fall 2020"
                                courses={this.state.courses}/>
                        </Route>
                        <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>

                        {/*<Route path="/grid" exact component={CourseGridComponent}/>*/}
                        <Route path="/grid" exact>
                            <CourseGridComponent courses={this.state.courses}/>
                        </Route>
                    </div>

                    <Route path={["/", "/grid"]} exact component={CourseNavbarComponent}/>

                </BrowserRouter>
            </div>
        )

    }
}