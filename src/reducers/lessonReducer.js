
import {CREATE_LESSON_FOR_MODULE, DELETE_LESSON, UPDATE_LESSON} from "../components/LessonTabsComponent";
import {FIND_LESSONS_FOR_MODULE} from "../components/CourseEditorComponent";


const initialState = {
    lessons: [] // to make sure initial state is iterable
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(lesson => lesson._id === action.lesson._id ?
                    action.lesson : lesson)
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case FIND_LESSONS_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons,
                // each list of lessons is under the module id
                // module id is added as attr once component is invoked
                moduleId: action.moduleId,
                courseId: action.courseId
            }
        case CREATE_LESSON_FOR_MODULE:
            return {
                // prev state is copied so we still have module id
                // after adding new lesson to the list
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        default:
            return state
    }
}

export default lessonReducer;


