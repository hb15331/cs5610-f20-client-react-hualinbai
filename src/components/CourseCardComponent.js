import React from "react";
import {Link} from "react-router-dom";
import {updateCourse} from "../services/CourseService";


export default class CourseCardComponent extends React.Component {

    state = {
        course: this.props.course,
        editing: false
    }


    render() {
        return (
            // make the cards responsive to different screen size
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1">

            <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>

                <div className="card-body">
                    <h5 className="card-title">
                        {this.state.course.title}
                    </h5>
                    <p className="card-text">
                        Course ID: {this.state.course._id}
                    </p>
                    <p className="card-text">
                        Modified: {this.state.course.modified}
                    </p>
                    <Link className="btn btn-primary"
                          to={`/edit/${this.props.course._id}`}>More...</Link>

                    {
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
                    {
                        this.state.editing &&
                        <button
                            onClick={() =>
                                updateCourse(this.state.course._id, this.state.course)
                                    .then(status => {
                                        this.props.updateRowCourses()
                                        this.setState({editing: false})
                                    })
                            }
                            className="btn btn-link">
                            <i className="fa fa-check"/>
                        </button>
                    }

                    {
                        this.state.editing &&
                        // value attr is tied to the state value so cannot modified from field
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
                    {
                        // !this.state.editing &&
                        // <Link to={`/edit/${this.props.course._id}`}>
                        //     {this.props.course.title}
                        // </Link>
                    }

                </div>
            </div>

            </div>
        )

    }


}

