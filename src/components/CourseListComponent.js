import React from 'react';
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService"
import {Link} from "react-router-dom";


class CourseListComponent extends React.Component {

    // invoke the render() whenever the state is changed
    state = {
        courses: [], // maintain the local state of array
        courseBeingEdited: {} // flag the course being edited
    }

    componentDidMount() {
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
                    ...prevState.courses, newCourse
                ]
            })))
    }

    editCourse = (course) => {
        this.setState({
            courseBeingEdited: course
        })
    }

    render() {
        return (
            <div>
            <h1>Course List (For {this.props.instructor}) {this.props.term}</h1>
            <table className="table">

            <thead>
            <tr>
                <th>Title</th>
                <th className="d-none d-sm-table-cell">Owned by</th>
                <th className="d-none d-sm-table-cell">Last Modified</th>
                <th className="d-none d-sm-table-cell">
                    <a href="#"><i className="fa fa-table"></i></a>
                    <a className="ml-2" href="#"><i className="fa fa-sort-alpha-desc"></i></a>

                    <Link className="ml-2" to="/grid"><i className="fa fa-th"></i></Link>

                </th>
            </tr>
            </thead>

            <tbody>
            {
                this.state.courses.map(course =>
                    <CourseRowComponent
                        deleteCourse={this.deleteCourse}
                        course={course}/>
                )
            }
            </tbody>
            </table>
            <button className="btn btn-success" onClick={this.addCourse}>
                Add Course
            </button>
            </div>
        );
    }
}


export default CourseListComponent;
