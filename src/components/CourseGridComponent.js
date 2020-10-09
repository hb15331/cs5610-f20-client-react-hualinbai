import React from "react";
import CourseCardComponent from "./CourseCardComponent";
import {findAllCourses} from "../services/CourseService";
import {deleteCourse, createCourse} from "../services/CourseService"
import {Link} from "react-router-dom";

// Grid component should use the courses state passed in as parameter
export default class CourseGridComponent extends React.Component {

    // state = {
    //     courses: []
    // }
    //
    // updateRowComponent = () => {
    //     findAllCourses()
    //         .then(courses => this.setState({courses: courses}))
    // }
    //
    //
    // componentDidMount() {
    //     findAllCourses()
    //         .then(courses => {
    //             this.setState({courses: courses})
    //         })
    // }
    //
    // addCourse = () => {
    //     const newCourse = {
    //         title: "New Course",
    //         owner: "me",
    //         modified: (new Date()).toDateString()
    //     }
    //     createCourse(newCourse)
    //         .then(actualCourse => this.setState(prevState => ({
    //             courses: [
    //                 ...prevState.courses, actualCourse
    //             ]
    //         })))
    // }
    //
    // deleteCourse = (course) => {
    //     deleteCourse(course._id)
    //         .then(status => this.setState(prevState => ({
    //             // create a new array of courses, where the course that matches
    //             // the specified id is removed
    //             courses: prevState.courses.filter(c => c._id !== course._id)
    //             })
    //         ))
    // }

    render() {
        return (
            <div>

            <table className="table" style={{marginTop: "60px"}}>
            <thead>
            <tr>
                <th className="d-none d-sm-table-cell">Recent documents</th>
                <th className="d-none d-sm-table-cell">Owned by me</th>
                <th className="d-none d-sm-table-cell">
                    <Link to="/"><i className="fa fa-list"/></Link>
                    <a className="ml-2" href="#"><i className="fa fa-sort-alpha-asc"/></a>
                </th>
            </tr>
            </thead>
            </table>

            <div className="card-deck mt-5">
                {
                    this.props.courses.map((course) =>
                        <CourseCardComponent
                            course={course}
                            deleteCourse={this.props.deleteCourse}
                            updateRowCourses={this.props.updateRowCourses}
                            key={course._id}/>
                    )
                }
            </div>

            <button className="btn btn-success"
                    style={{position: "fixed", bottom: 0, right: 0}}
                    onClick={this.props.addCourse}><i className="fa fa-plus-circle"/></button>

            </div>
        )
    }

}