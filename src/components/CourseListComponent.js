import React from 'react';
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, deleteCourse, createCourse} from "../services/CourseService"
import {Link} from "react-router-dom";


class CourseListComponent extends React.Component {

    // invoke the render() whenever the state is changed
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

    addCourse = () => {
        const newCourse = {
            title: "New Course",
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

            <table className="table" style={{marginTop: "60px"}}>

            <thead>
            <tr>
                <th>Title</th>
                <th className="d-none d-sm-table-cell">Owned by</th>
                <th className="d-none d-sm-table-cell">Last Modified</th>
                <th className="d-none d-sm-table-cell">
                    <Link to="/grid"><i className="fa fa-th"/></Link>
                    <a className="ml-2" href="#"><i className="fa fa-sort-alpha-asc"/></a>
                </th>
            </tr>
            </thead>

            <tbody>
            {
                this.state.courses.map(course =>
                    <CourseRowComponent
                        deleteCourse={this.deleteCourse}
                        updateRowCourses={this.updateRowCourses}
                        course={course}/>
                )
            }
            </tbody>
            </table>
            <button
                className="btn btn-success"
                style={{position: "fixed", bottom: 0, right: 0}}
                onClick={this.addCourse}><i className="fa fa-plus-circle"/></button>
            </div>
        );
    }
}


export default CourseListComponent;
