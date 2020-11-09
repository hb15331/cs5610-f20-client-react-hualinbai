import React from "react";
import {connect} from "react-redux";
import {createWidgetForTopic, deleteWidget, updateWidget, editWidget, okWidget} from "../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";


const WidgetList = ({widgets=[], createWidgetForTopic, deleteWidget, updateWidget,
                        editWidget, okWidget, topicId}) =>
    <div>
        <ul className="list-group">

            {
                widgets.map(widget =>
                    // as we iterate, each list item should have a unique identifier
                    <li className="list-group-item" key={widget.id}>

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget widget={widget}
                                           deleteWidget={deleteWidget}
                                           okWidget={okWidget}
                                           updateWidget={updateWidget}
                                           editWidget={editWidget}
                            />
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget}
                                             deleteWidget={deleteWidget}
                                             okWidget={okWidget}
                                             updateWidget={updateWidget}
                                             editWidget={editWidget}
                            />
                        }
                        {
                            widget.type === "LIST" &&
                            <ListWidget widget={widget}
                                             deleteWidget={deleteWidget}
                                             okWidget={okWidget}
                                             updateWidget={updateWidget}
                                             editWidget={editWidget}
                            />
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget widget={widget}
                                        deleteWidget={deleteWidget}
                                        okWidget={okWidget}
                                        updateWidget={updateWidget}
                                        editWidget={editWidget}
                            />
                        }
                    </li>
                )
            }

            <li className="list-group-item text-center">
                <button className="btn btn-link" onClick={() => createWidgetForTopic(topicId)}>
                    <i className="fa fa-plus"/>
                </button>
            </li>
        </ul>
    </div>



const stateToPropertyMapper = (state) => ({
    widgets: state.widgetsReducer.widgets,
    topicId: state.widgetsReducer.topicId
})


const propertyToDispatchMapper = (dispatch) => ({
    deleteWidget: (widget) => deleteWidget(dispatch, widget),
    createWidgetForTopic: (topicId) => createWidgetForTopic(dispatch, topicId),
    updateWidget: (widget) => updateWidget(dispatch, widget),
    editWidget: (widget) => editWidget(dispatch, widget),
    okWidget: (widget) => okWidget(dispatch, widget)
})


export default connect (stateToPropertyMapper, propertyToDispatchMapper)(WidgetList)