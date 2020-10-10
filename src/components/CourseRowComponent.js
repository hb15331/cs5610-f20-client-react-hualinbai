import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";


export default class CourseRowComponent extends React.Component {

    state = {
        editing: false,
        course: this.props.course
    }


    render() {
        return (
        <tr>
            <td>
                {   // if editing state becomes true, hides the course title and shows the field
                    this.state.editing &&
                    // value attr is tied to the state value so cannot be modified from field
                    // instead modify the state value
                    <input className="form-control"
                           // e is event that has reference to original DOM element that
                           // generate this event (i.e. input field)
                           onChange={(e) => {
                               const newTitle = e.target.value
                               this.setState(prevState => ({
                                   course: {...prevState.course, title: newTitle}
                               }))
                           }
                           }
                           value={this.state.course.title}/>
                }
                {   // if editing state becomes false, hides the field and shows the course title
                    !this.state.editing &&
                    <Link to={`/edit/${this.props.course._id}`}>
                        {this.props.course.title}
                    </Link>
                }
            </td>
            <td className="d-none d-sm-table-cell">{this.props.course.owner}</td>
            <td className="d-none d-lg-table-cell">{this.props.course.modified}</td>
            <td>
                {   // if editing status turns false, only shows edit and delete button
                    !this.state.editing &&
                    <div>
                    <button
                    onClick={() => this.setState({editing: true})}
                    className="btn btn-link">
                        <i className="fa fa-pencil"/></button>
                    <button
                    onClick={() => this.props.deleteCourse(this.props.course)}
                    className="btn btn-link">
                        <i className="fa fa-trash"/></button>
                    </div>
                }

                {   // if editing status turns true, only shows the save button
                    this.state.editing &&
                    <button
                        onClick={() =>
                            updateCourse(this.state.course._id, this.state.course)
                                .then(status => {
                                    // update the local state of all courses
                                    this.props.updateRowCourses()
                                    this.setState({editing: false})
                                })
                        }
                        className="btn btn-link"><i className="fa fa-check"/></button>
                }

            </td>
        </tr>
        )
    }


}
