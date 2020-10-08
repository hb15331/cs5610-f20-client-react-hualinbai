import React from 'react';
import CourseRowComponent from "./CourseRowComponent";
import {findAllCourses, updateCourse, deleteCourse, createCourse} from "../services/CourseService"
import {Link} from "react-router-dom";


class CourseListComponent extends React.Component {

    // invoke the render() whenever the state is changed
    state = {
        courses: []
    }

    componentDidMount() {
        findAllCourses()
            .then(courses => {
                this.setState({
                    courses: courses
                })
            })
    }

    // componentDidMount() {
    //     this.setState({courses: this.props.courses})
    // }


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

            <table className="table mt-5">

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
