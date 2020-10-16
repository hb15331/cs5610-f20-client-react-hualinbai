import React from "react";
import {findCourseById} from "../services/CourseService";
import {Link} from "react-router-dom";
import LessonTabsContainer from "../containers/LessonTabsContainer";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import {findModulesForCourse} from "../services/ModuleService";
export const SET_COURSES = "SET_COURSES";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";


class CourseEditorComponent extends React.Component{

    // this lifecycle hook makes invocation to server
    // also used to retrieve the modules associated with a course
    componentDidMount() {
        this.props.findCourseById(this.props.match.params.courseId)
        this.props.findModulesForCourse(this.props.match.params.courseId)
    }


    render() {
        return (
        <div>
            <h2 className="my-3">
                <Link to="/"><i className="fa fa-home"/></Link>
                {this.props.course.title}
            </h2>

            <div className="row">

                <div className="col-4">
                    <ModuleListComponent/>
                </div>

                <div className="col-8">

                    <LessonTabsContainer/>

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
                        <a href="#"><i className="fa fa-toggle-on fa-2x"/></a>
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
                        <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-up"/></button>
                        <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-down"/></button>
                        <button type="submit" className="btn btn-danger ml-2"><i className="fa fa-trash"/></button>
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

const stateToPropertyMapper = (state) => ({
    course: state.courseReducer.course
})


const propertyToDispatchMapper = (dispatch) => ({
    // findCourseById is the props attr
    // props name is same as name of service function
    findCourseById: (courseId) => {findCourseById(courseId)
        .then(actualCourse => dispatch({
            type: SET_COURSES,
            course: actualCourse
        }))
    },
    findModulesForCourse: (courseId) => findModulesForCourse(courseId)
        .then(actualModules => dispatch({
            type: FIND_MODULES_FOR_COURSE,
            modules: actualModules
        }))
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)(CourseEditorComponent)