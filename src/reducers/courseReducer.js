import {SET_COURSES} from "../components/CourseEditorComponent";

const initialState = {
    courses: [],
    course: {}
}

const courseReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_COURSES:
            return {
                ...state,
                course: action.course
            }
        default:
            return state
    }

}

export default courseReducer;



