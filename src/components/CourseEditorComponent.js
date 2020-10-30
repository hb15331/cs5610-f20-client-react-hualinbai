import React from "react";
import {findCourseById} from "../services/CourseService";
import {Link} from "react-router-dom";
import ModuleListComponent from "./ModuleListComponent";
import {connect} from "react-redux";
import {findModulesForCourse} from "../services/ModuleService";
import {findLessonsForModule} from "../services/LessonService";
import LessonTabsComponent from "./LessonTabsComponent";
import {findTopicsForLesson} from "../services/TopicService";
import TopicPillsComponent from "./TopicPillsComponent";
// import WidgetListContainer from "../containers/WidgetListContainer";
import WidgetList from "./WidgetList";
import WidgetService from "../services/WidgetService";

export const SET_COURSES = "SET_COURSES";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const FIND_LESSONS_FOR_MODULE = "FIND_LESSONS_FOR_MODULE";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";



class CourseEditorComponent extends React.Component{

    // this lifecycle hook makes invocation to server
    // also used to retrieve the modules associated with a course
    componentDidMount() {
        // router is passing the props, which contains course id and module id
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        // invoke service functions and only render the parent component
        this.props.findCourseById(courseId)
        this.props.findModulesForCourse(courseId)
        // when the editor is first loaded, no id is passed from url until we click
        // on any link, so no child component is rendered
        if (moduleId) {
            this.props.findLessonsForModule(courseId, moduleId)
        }
        if (lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId) {
            this.props.findWidgetsForTopic(topicId)
        }
        //this.props.findAllWidgets()
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        const courseId = this.props.match.params.courseId
        const moduleId = this.props.match.params.moduleId
        const lessonId = this.props.match.params.lessonId
        const topicId = this.props.match.params.topicId

        // if the props is changed as url is changed, fetch a new set of lessons
        if (moduleId !== prevProps.match.params.moduleId) {
            this.props.findLessonsForModule(courseId, moduleId)
        }
        if (lessonId !== prevProps.match.params.lessonId) {
            this.props.findTopicsForLesson(lessonId)
        }
        if (topicId !== prevProps.match.params.topicId) {
            this.props.findWidgetsForTopic(topicId)
        }

    }


    render() {
        return (
        <div>
            <h2 className="my-3">
                <Link to="/"><i className="fa fa-home"/></Link>
                <span className="ml-2">{this.props.course.title}</span>
            </h2>

            <div className="row">

                <div className="col-4">
                    <ModuleListComponent/>
                </div>

                <div className="col-8">

                    <LessonTabsComponent/>

                    <TopicPillsComponent/>

                    <WidgetList/>

                    {/*<WidgetListContainer/>*/}
                    
                    {/*<div className="mt-5 d-flex align-items-center">*/}
                    {/*    <button className="btn btn-success">Save</button>*/}
                    {/*    <span className="ml-3 mr-1">Preview</span>*/}
                    {/*    <a href="#"><i className="fa fa-toggle-on fa-2x"/></a>*/}
                    {/*</div>*/}

                    {/*<form className="form-inline my-3">*/}
                    {/*    <span className="font-weight-bold h3">Heading Widget</span>*/}
                    {/*    <div className="form-group ml-auto">*/}
                    {/*        <select className="form-control" aria-label="widget-dropdown">*/}
                    {/*            <option>Heading</option>*/}
                    {/*            <option>YouTube</option>*/}
                    {/*            <option>Slides</option>*/}
                    {/*            <option>Image</option>*/}
                    {/*            <option>List</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-up"/></button>*/}
                    {/*    <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-down"/></button>*/}
                    {/*    <button type="submit" className="btn btn-danger ml-2"><i className="fa fa-trash"/></button>*/}
                    {/*</form>*/}

                    {/*<form>*/}
                    {/*    <div className="form-row">*/}

                    {/*        <div className="form-group col-sm-6">*/}
                    {/*            <input type="text" className="form-control" placeholder="Heading text"*/}
                    {/*                   aria-label="heading-text"/>*/}
                    {/*        </div>*/}

                    {/*        <div className="form-group col-sm-6">*/}
                    {/*            <select className="form-control" id="widget-type" aria-label="widget-type">*/}
                    {/*                <option>Heading 1</option>*/}
                    {/*                <option>Heading 2</option>*/}
                    {/*                <option>Heading 3</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <input className="form-control" type="text" placeholder="Type widget name"*/}
                    {/*           aria-label="widget-name"/>*/}

                    {/*</form>*/}

                    {/*<p className="font-weight-bold h4 mt-4">Preview</p>*/}
                    {/*<p> Heading Text</p>*/}

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

    findWidgetsForTopic: (topicId) => WidgetService.findWidgetsForTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets: widgets,
            topicId: topicId
        })),

    findAllWidgets: () => WidgetService.findAllWidgets().then(widgets => dispatch({
        type: FIND_ALL_WIDGETS,
        widgets: widgets
        })),

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
        })),

    findLessonsForModule: (courseId, moduleId) => findLessonsForModule(courseId, moduleId)
        .then(lessons => dispatch({
            type: FIND_LESSONS_FOR_MODULE,
            lessons: lessons,
            moduleId: moduleId,
            courseId: courseId
        })),

    findTopicsForLesson: (lessonId) => findTopicsForLesson(lessonId)
        .then(topics => dispatch({
            type: FIND_TOPICS_FOR_LESSON,
            topics: topics,
            lessonId: lessonId
        }))

})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)(CourseEditorComponent)