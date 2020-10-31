import React from "react";
import {connect} from "react-redux";
import {createWidgetForTopic, deleteWidget, updateWidget, editWidget, okWidget} from "../actions/widgetActions";
import HeadingWidget from "./widgets/HeadingWidget";


const WidgetList = ({widgets=[], createWidgetForTopic, deleteWidget, updateWidget, editWidget, okWidget, topicId}) =>
    <div>
        <ul className="list-group">

            {
                widgets.map(widget =>
                    // as we iterate, each list item should have a unique identifier
                    <li className="list-group-item" key={widget.id}>

                        {console.log(widget.editing)}

                        {/*{   // if editing, shows the field, delete and ok button*/}
                        {/*    widget.editing &&*/}
                        {/*    <span>*/}
                        {/*    <input onChange={event => updateWidget({*/}
                        {/*        // copy the data in old widget and overwrite with new value in input field*/}
                        {/*        ...widget, name: event.target.value*/}
                        {/*    })}*/}
                        {/*           className="form-control"*/}
                        {/*           value={widget.name}/>*/}
                        {/*    <button className="btn btn-link pull-right" onClick={() => deleteWidget(widget)}>*/}
                        {/*        <i className="fa fa-close"/></button>*/}
                        {/*    <button className="btn btn-link pull-right" onClick={() => okWidget(widget)}>*/}
                        {/*        <i className="fa fa-check"/></button></span>*/}

                        {/*}*/}

                        {/*{*/}
                        {/*    !widget.editing &&*/}
                        {/*    <span>*/}
                        {/*        {widget.name}*/}
                        {/*        {widget.type}*/}
                        {/*        */}
                        {/*        <button className="btn btn-link pull-right" onClick={() => editWidget(widget)}>*/}
                        {/*            <i className="fa fa-pencil"/></button>*/}
                        {/*    </span>*/}
                        {/*}*/}

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget widget={widget}
                                           deleteWidget={deleteWidget}
                                           okWidget={okWidget}
                                           updateWidget={updateWidget}
                                           editWidget={editWidget}/>
                        }

                    </li>
                )
            }

            {/*<HeadingWidget/>*/}

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