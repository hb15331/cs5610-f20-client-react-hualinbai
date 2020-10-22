import React from "react";
import {connect} from "react-redux";
import {createTopicForLesson, deleteTopic, updateTopic} from "../services/TopicService";
export const CREATE_TOPIC_FOR_LESSON = "CREATE_TOPIC_FOR_LESSON";
export const DELETE_TOPIC = "DELETE_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";


const TopicPillsComponent = ({topics=[], lessonId, createTopicForLesson, deleteTopic, updateTopic, okTopic, editTopic, setSelectedTopic, selectedId}) =>

    <div className="mt-4">
    {/*<h3>Topics for {lessonId}</h3>*/}
    <ul className="nav nav-pills">
        {
            topics.map(topic =>

                // highlight the current edited topic
                <li className="nav-item" key={topic._id}>
                    <a className={`nav-link ${topic.editing || topic._id === selectedId ? "active" : ""}`}>

                        {
                            !topic.editing &&
                            <span>

                            <a href="#" onClick={() => setSelectedTopic(topic._id)} className="text-dark">
                            {topic.title}
                            </a>

                            <button className="btn btn-link text-dark" onClick={() => editTopic(topic)}>
                                <i className="fa fa-pencil"/></button>
                            </span>
                        }
                        {
                            topic.editing &&
                            <span>
                            <input onChange={(event) => updateTopic({
                                ...topic,
                                title: event.target.value
                            })}
                                   className="form-control"
                                   value={topic.title}/>

                            <button className="btn btn-link text-success" onClick={() => okTopic(topic)}>
                                <i className="fa fa-check"/></button>

                            <button className="btn btn-link text-danger" onClick={() => deleteTopic(topic._id)}>
                                <i className="fa fa-close"/></button>

                            </span>
                        }
                    </a>
                </li>
            )
        }
        <li className="nav-item">
            <a className="nav-link">
            <button className="btn btn-link" onClick={() => createTopicForLesson(lessonId)}>
                <i className="fa fa-plus"/></button>
            </a>
        </li>
    </ul>
    </div>


const stateToPropertyMapper = (state) => ({
    topics: state.topicReducer.topics,
    lessonId: state.topicReducer.lessonId,
    selectedId: state.topicReducer.selectedId
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
        })),
    okTopic: (topic) => updateTopic(topic._id, {...topic, editing: false})
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic: {...topic, editing: false}
        })),
    editTopic: (topic) => updateTopic(topic._id, {...topic, editing: true})
        .then(status => dispatch({
            type: UPDATE_TOPIC,
            topic: {...topic, editing: true}
        })),
    updateTopic: (topic) =>
        dispatch({
            type: UPDATE_TOPIC,
            topic: topic
        }),

    setSelectedTopic: (topicId) => dispatch({
        type: "SET_SELECTED_TOPIC",
        selectedId: topicId
    })



})



export default connect (stateToPropertyMapper, propertyToDispatchMapper)(TopicPillsComponent);