import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import CourseListComponent from "./CourseListComponent";
import CourseEditorComponent from "./CourseEditorComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseNavbarComponent from "./CourseNavbarComponent";
import {createCourse, findAllCourses, deleteCourse} from "../services/CourseService";


export default class CourseManagerComponent extends React.Component {

    state = {
        courses: []
    }


    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({courses: courses})
            })
    }


    // update the local state with the courses data on the server
    updateRowCourses = () => {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }


    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => this.setState(prevState => ({
                    // create a new array of courses, where the course that matches
                    // the specified id is removed
                    courses: prevState.courses.filter(c => c._id !== course._id)
                })
            ))
    }


    addCourse = (newTitle) => {
        const newCourse = {
            //title: "New Course",
            title: newTitle,
            owner: "me",
            modified: (new Date()).toDateString()
        }
        createCourse(newCourse)
            .then(actualCourse => this.setState(prevState => ({
                courses: [
                    ...prevState.courses, actualCourse
                ]
            })))
    }


    render() {
        return (
            <div>
                <BrowserRouter>

                    <div className = "container">
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/" exact>
                            <CourseListComponent
                                courses={this.state.courses}
                                addCourse={this.addCourse}
                                deleteCourse={this.deleteCourse}
                                updateRowCourses={this.updateRowCourses}/>
                        </Route>
                        <Route path="/edit/:courseId" exact component={CourseEditorComponent}/>

                        <Route path="/grid" exact>
                            <CourseGridComponent
                                courses={this.state.courses}
                                addCourse={this.addCourse}
                                deleteCourse={this.deleteCourse}
                                updateRowCourses={this.updateRowCourses}/>
                        </Route>
                    </div>

                    <Route path={["/", "/grid"]} exact>
                        <CourseNavbarComponent addCourse={this.addCourse}/>
                    </Route>

                </BrowserRouter>
            </div>
        )

    }
}