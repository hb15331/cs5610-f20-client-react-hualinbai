import {CREATE_MODULE, DELETE_MODULE, UPDATE_MODULE} from "../components/ModuleListComponent";
import {FIND_MODULES_FOR_COURSE} from "../components/CourseEditorComponent";


const initialState = {
    modules : []
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module !== action.module)
            }
        case CREATE_MODULE:
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(module => module._id === action.module._id ? action.module : module)
            }
        default:
            return state
    }
}

export default moduleReducer;