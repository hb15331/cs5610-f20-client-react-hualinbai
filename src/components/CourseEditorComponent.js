import React from "react";
import {findCourseById} from "../services/CourseService";
import {Link} from "react-router-dom";

export default class CourseEditorComponent extends React.Component{

    state = {
        course: {
            _id: "",
            title: ""
        }
    }

    componentDidMount() {
        //console.log(this.props)
        findCourseById(this.props.match.params.courseId)
            .then(actualCourse => this.setState({
                course: actualCourse
            }))
    }

    render() {
        return (
        <div>
            <h2 className="my-3">
                <Link to="/courses"><i className="fa fa-home"/></Link>
                {this.state.course.title}
            </h2>

            <div className="row">
                <div className="col-4">
                    <ul className="list-group wbdv-module-list">
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 1</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 2</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item active wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 3</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 4</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 5</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 6</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item wbdv-module-item">
                            <span className="wbdv-module-item-title">Module 7</span>
                            <a href="#">
                                <i className="fa fa-close pull-right"/></a>
                        </li>
                        <li className="list-group-item">
                            <a href="#"><i className="fa fa-plus-circle pull-right"/></a>
                        </li>
                    </ul>
                </div>

                <div className="col-8">
                    <ul className="nav nav-tabs wbdv-lesson-tabs">
                        <li className="nav-item"><a className="nav-link active" href="#">Lesson 1</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Lesson 2</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Lesson 3</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Lesson 4</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Lesson 5</a></li>
                        <li className="nav-item">
                            <a className="nav-link wbdv-lesson-add-btn" href="#">
                                <i className="fa fa-plus-circle pull-right fa-lg"/></a>
                        </li>
                    </ul>
                    <ul className="nav nav-pills justify-content-between padding-below-header mt-3 wbdv-topic-pill-list">
                        <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 1</a></li>
                        <li className="nav-item wbdv-topic-pill"><a className="nav-link active" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 3</a></li>
                        <li className="nav-item wbdv-topic-pill"><a className="nav-link" href="#">Topic 4</a></li>
                        <li className="nav-item wbdv-topic-pill">
                            <a className="nav-link wbdv-topic-add-btn" href="#">
                                <i className="fa fa-plus-circle pull-right fa-lg"/></a>
                        </li>
                    </ul>

                    <div className="mt-3 d-flex align-items-center">
                        <button className="btn btn-success">Save</button>
                        <span className="ml-3 mr-1">Preview</span>
                        <a href="#"><i className="fa fa-toggle-on fa-2x"></i></a>
                    </div>

                    <form className="form-inline my-3">
                        <span className="font-weight-bold h3">Heading Widget</span>
                        <div className="form-group ml-auto">
                            <select className="form-control" aria-label="widget-dropdown">
                                <option>Heading</option>
                                <option>YouTube</option>
                                <option>Slides</option>
                                <option>Image</option>
                                <option>List</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-up"></i>
                        </button>
                        <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-down"></i>
                        </button>
                        <button type="submit" className="btn btn-danger ml-2"><i className="fa fa-trash"></i></button>
                    </form>

                    <form>
                        <div className="form-row">

                            <div className="form-group col-sm-6">
                                <input type="text" className="form-control" placeholder="Heading text"
                                       aria-label="heading-text"/>
                            </div>

                            <div className="form-group col-sm-6">
                                <select className="form-control" id="widget-type" aria-label="widget-type">
                                    <option>Heading 1</option>
                                    <option>Heading 2</option>
                                    <option>Heading 3</option>
                                </select>
                            </div>
                        </div>

                        <input className="form-control" type="text" placeholder="Type widget name"
                               aria-label="widget-name"/>

                    </form>

                    <p className="font-weight-bold h4 mt-4">Preview</p>
                    <p> Heading Text</p>

                </div>
            </div>
        </div>
        )
    }

}