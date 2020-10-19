import React from "react";
import {connect} from "react-redux";
import {createLessonForModule, deleteLesson, updateLesson} from "../services/LessonService";
import {Link} from "react-router-dom";

export const CREATE_LESSON_FOR_MODULE = "CREATE_LESSON_FOR_MODULE";
export const DELETE_LESSON = "DELETE_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";


const LessonTabsComponent = ({courseId, moduleId, lessons=[], createLessonForModule, deleteLesson, updateLesson}) =>

    <div>
    <h3>lessons for {moduleId}</h3>
    <ul className="nav nav-tabs">
        {
            // each child in a list should have a unique key prop
            lessons.map(lesson =>
                <li className="nav-item" key={lesson._id}>

                    <a className="nav-link">

                    {
                        lesson.editing &&
                        <span>
                            <input onChange={(event) => updateLesson({
                                ...lesson, title: event.target.value
                            })}
                                   value={lesson.title}/>
                            <button className="btn btn-link" onClick={() => deleteLesson(lesson._id)}>
                                <i className="fa fa-close"/>
                            </button>
                            <button className="btn btn-link" onClick={() => updateLesson({...lesson, editing: false})}>
                                <i className="fa fa-check"/>
                            </button>
                        </span>
                    }
                    {
                        !lesson.editing &&
                        <span>

                            <Link to={`/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}>
                                {lesson.title}
                            </Link>

                            <button className="btn btn-link" onClick={() => updateLesson({...lesson, editing: true})}>
                                <i className="fa fa-pencil"/>
                            </button>

                        {/*<Link to={`${moduleId}/lessons/${lesson._id}`}>{lesson.title}</Link>*/}
                        {/*<button className="btn btn-link" onClick={() => updateLesson({...lesson, editing: true})}>*/}
                        {/*    <i className="fa fa-pencil"/></button>*/}

                        </span>
                    }
                    </a>
                </li>
            )
        }

        <li className="nav-item"><button className="btn btn-primary" onClick={() => createLessonForModule(moduleId)}>+</button></li>
    </ul>

    </div>



const stateToPropertyMapper = (state) => ({
    moduleId: state.lessonReducer.moduleId,
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