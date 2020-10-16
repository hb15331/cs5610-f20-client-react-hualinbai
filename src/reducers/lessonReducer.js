
import {CREATE_LESSON, DELETE_LESSON, UPDATE_LESSON} from "../actions/LessonActions";

const initialState = {
    lessons: [
        {
            _id: "123",
            name: "lesson 1",
            editing: false
        },
        {
            _id: "234",
            name: "lesson 2",
            editing: false
        },
        {
            _id: "345",
            name: "lesson 3",
            editing: false
        },
        {
            _id: "456",
            name: "lesson 4",
            editing: false
        }
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [...state.lessons, {
                    _id: Date.now() + "",
                    name: "New Lesson",
                    editing: false
                }]
            }
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ?
                    action.lesson : lesson)
            }
        case DELETE_LESSON:
            return {
                //lessons: state.lessons.filter(lesson => lesson !== action.lesson)
                lessons: state.lessons.filter(lesson => lesson._id !== action.lesson._id)
            }
        default:
            return state
    }

}

export default lessonReducer;


