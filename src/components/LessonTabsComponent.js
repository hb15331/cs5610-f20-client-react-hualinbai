import React from "react";
import {connect} from "react-redux";
import {createLessonForModule, deleteLesson, updateLesson} from "../services/LessonService";
import {Link} from "react-router-dom";
import "../styles/LessonTabsComponent.css";

export const CREATE_LESSON_FOR_MODULE = "CREATE_LESSON_FOR_MODULE";
export const DELETE_LESSON = "DELETE_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";


const LessonTabsComponent = ({courseId, moduleId, lessons=[], createLessonForModule, deleteLesson, updateLesson, lessonId}) =>

    <div>
    {/*<h3>lessons for {moduleId}</h3>*/}
    <ul className="nav nav-tabs">
        {
            // each child in a list should have a unique key prop
            lessons.map(lesson =>

                // highlight the current edited lesson
                <li className="nav-item" key={lesson._id}>
                    <a className={`nav-link ${lesson.editing || lesson._id === lessonId ? "activeTab" : ""}`}>
                    {
                        lesson.editing &&
                        <span>
                            <input onChange={(event) => updateLesson({
                                ...lesson, title: event.target.value
                            })}
                                   className="form-control"
                                   value={lesson.title}/>

                             <button className="btn btn-link text-success" onClick={() => updateLesson({...lesson, editing: false})}>
                                <i className="fa fa-check"/>
                            </button>

                            <button className="btn btn-link text-danger" onClick={() => deleteLesson(lesson._id)}>
                                <i className="fa fa-close"/>
                            </button>

                        </span>
                    }
                    {
                        !lesson.editing &&
                        <span>
                            <Link to={`/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`} className="text-dark">
                                {lesson.title}
                            </Link>
                            <button className="btn btn-link text-dark" onClick={() => updateLesson({...lesson, editing: true})}>
                                <i className="fa fa-pencil"/>
                            </button>
                        </span>
                    }
                    </a>
                </li>
            )
        }
        <li className="nav-item">
            <a className="nav-link">
            <button className="btn btn-link" onClick={() => createLessonForModule(moduleId)}>
                <i className="fa fa-plus"/></button>
            </a>
        </li>
    </ul>
    </div>


// lesson state is also used in the module component
const stateToPropertyMapper = (state) => ({
    moduleId: state.lessonReducer.moduleId,
    lessonId: state.topicReducer.lessonId,
    lessons: state.lessonReducer.lessons,
    courseId: state.lessonReducer.courseId
})


const propertyToDispatchMapper = (dispatch) => ({

    updateLesson: (newLesson) =>
        updateLesson(newLesson)
            // update returns status that can be ignored
            .then(status => dispatch({
                type: UPDATE_LESSON,
                lesson: newLesson
            })),

    deleteLesson: (lessonId) =>
        deleteLesson(lessonId)
            // delete returns status
            .then(status => dispatch({
                type: DELETE_LESSON,
                lessonId: lessonId
            })),

    createLessonForModule: (moduleId) => createLessonForModule(
        moduleId,
        {title: "New Lesson"})
        // create returns the actual lesson with id
        .then(actualLesson => dispatch({
            type: CREATE_LESSON_FOR_MODULE,
            lesson: actualLesson
        }))

})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)(LessonTabsComponent)