import WidgetService from "../services/WidgetService";

export const DELETE_WIDGET = "DELETE_WIDGET"
export const CREATE_WIDGET = "CREATE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"


// pass the actual widget with new name
export const updateWidget = (dispatch, widget) => {
    dispatch({
        type: UPDATE_WIDGET,
        widget: widget
    })
}


// TODO:
// export const moveUp = (dispatch, widget) =>
//     dispatch({
//         type: "WIDGET_POSITION_UP",
//         widget: widget
//     })


export const deleteWidget = (dispatch, widget) => {
    WidgetService.deleteWidget(widget.id)
        .then(status => dispatch({
            type: DELETE_WIDGET,
            widget: widget
        }))
}


export const createWidgetForTopic = (dispatch, topicId) =>

    WidgetService.createWidgetForTopic(topicId)
        .then(widget => dispatch({
            type: CREATE_WIDGET,
            //widget: {...widget, editing: true}
            // a new widget is in preview mode by default
            widget: {
                ...widget,
                editing: false,
                //listType: "UNORDERED"
            }
        }))



export const editWidget = (dispatch, widget) => {
    // pass the updated widget with editing status true
    // same as the update action type
    WidgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget: {...widget, editing: true}
        }))
}


export const okWidget = (dispatch, widget) => {
    WidgetService.updateWidget(widget.id, widget)
        .then(status => dispatch({
            type: UPDATE_WIDGET,
            widget: {...widget, editing: false}
        }))
}


