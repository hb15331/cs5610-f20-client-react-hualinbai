import React from "react";
import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import {createLesson, deleteLesson, updateLesson, okLesson, editLesson} from "../actions/LessonActions";


const stateToPropertyMapper = (state) => ({
    lessons: state.lessonReducer.lessons
})


const propertyToDispatchMapper = (dispatch) => ({
    createLesson: () => createLesson(dispatch),
    deleteLesson: (lesson) => deleteLesson(dispatch, lesson),
    updateLesson: (lesson) => updateLesson(dispatch, lesson),
    okLesson: (lesson) => okLesson(dispatch, lesson),
    editLesson: (lesson) => editLesson(dispatch, lesson)
})



export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(LessonTabsComponent)

