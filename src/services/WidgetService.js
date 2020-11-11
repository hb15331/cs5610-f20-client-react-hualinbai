
// const WIDGET_URL = "http://localhost:8080/api/widgets"
// const TOPIC_URL = "http://localhost:8080/api/topics" // base url for topics

const WIDGET_URL = "https://tranquil-fjord-93485.herokuapp.com/api/widgets"
const TOPIC_URL = "https://tranquil-fjord-93485.herokuapp.com/api/topics" // base url for topics


const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())


const findAllWidgets = () =>
    fetch(WIDGET_URL)
        .then(response => response.json())


const createWidgetForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify({
            name: "",
            type: "HEADING",
            topicId: topicId,
            text: "",
            size: 1,
            url: "",
            ordered: false
        }),

        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())



const updateWidget = (widgetId, newWidget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(newWidget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    }).then(response => response.json())




export default {
    findAllWidgets,
    createWidgetForTopic,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}
