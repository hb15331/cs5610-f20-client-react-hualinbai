import {DELETE_WIDGET, CREATE_WIDGET, UPDATE_WIDGET} from "../actions/widgetActions";
import {FIND_ALL_WIDGETS, FIND_WIDGETS_FOR_TOPIC} from "../components/CourseEditorComponent";


const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [...state.widgets, action.widget],
                topicId: action.topicId
            }
        case UPDATE_WIDGET:
            return {
                // map recreates the widget list
                widgets: state.widgets.map(widget => widget.id === action.widget.id ?
                        action.widget : widget)
            }

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget !== action.widget)
            }
        case FIND_ALL_WIDGETS:
            return {
                ...state,
                widgets: action.widgets
            }
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets,
                topicId: action.topicId
            }
        default:
            return state
    }

}

export default widgetReducer;