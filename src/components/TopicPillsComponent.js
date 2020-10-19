import React from "react";
import {connect} from "react-redux";
import {createTopicForLesson, deleteTopic} from "../services/TopicService";
export const CREATE_TOPIC_FOR_LESSON = "CREATE_TOPIC_FOR_LESSON";
export const DELETE_TOPIC = "DELETE_TOPIC";


const TopicPillsComponent = ({topics=[], lessonId, createTopicForLesson, deleteTopic}) =>

    <div>
    <h3>Topics for {lessonId}</h3>
    <ul className="nav nav-pills">
        {
            topics.map(topic =>
                <li className="nav-item" key={topic._id}>
                    <a className="nav-link">
                        {topic.title}
                    </a>
                    <button className="btn btn-link" onClick={() => deleteTopic(topic._id)}>
                        <i className="fa fa-close"/>
                    </button>
                </li>
            )
        }
        <li className="nav-item">
            <button className="btn btn-link" onClick={() => createTopicForLesson(lessonId)}>
                <i className="fa fa-plus"/>
            </button>
        </li>
    </ul>
    </div>



const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId
})


const propertyToDispatchMapper = (dispatch) => ({

    createTopicForLesson: (lessonId) =>
        createTopicForLesson(lessonId, {title: "New Topic"})
        .then(actualTopic => dispatch({
            type: CREATE_TOPIC_FOR_LESSON,
            topic: actualTopic
        })),
    deleteTopic: (topicId) => deleteTopic(topicId)
        .then(status => dispatch({
            type: DELETE_TOPIC,
            topicId: topicId
        }))



})



export default connect (stateToPropertyMapper, propertyToDispatchMapper)(TopicPillsComponent);