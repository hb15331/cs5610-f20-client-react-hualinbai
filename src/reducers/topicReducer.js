import {FIND_TOPICS_FOR_LESSON} from "../components/CourseEditorComponent";
import {CREATE_TOPIC_FOR_LESSON, DELETE_TOPIC, UPDATE_TOPIC} from "../components/TopicPillsComponent";

const initialState = {
    topics: []
}


const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC_FOR_LESSON:
            //console.log(JSON.stringify(action.topics))
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics,
                lessonId: action.lessonId
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(topic => topic._id === action.topic._id ?
                    action.topic : topic)
            }

        case "SET_SELECTED_TOPIC":
            return {
                ...state,
                selectedId: action.selectedId,
            }

        default:
            return state;
    }

}


export default topicReducer;





