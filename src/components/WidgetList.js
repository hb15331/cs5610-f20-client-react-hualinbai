import React from "react";


const WidgetList = ({widgets=[], createWidget, deleteWidget, updateWidget, editWidget, okWidget}) =>
    <div>
        <ul className="list-group">
            {
                widgets.map(widget =>
                    <li className="list-group-item" key={widget._id}>

                        {   // if editing, shows the field, delete and ok button
                            widget.editing &&
                            <span>
                            <input onChange={event => updateWidget({
                                // copy the data in old widget and overwrite with new value in input field
                                ...widget, name: event.target.value
                            })}
                                   className="form-control"
                                   value={widget.name}/>
                            <button className="btn btn-link pull-right" onClick={() => deleteWidget(widget)}>
                                <i className="fa fa-close"/></button>
                            <button className="btn btn-link pull-right" onClick={() => okWidget(widget)}>
                                <i className="fa fa-check"/></button></span>

                        }
                        {   // if not editing, shows the title and edit button
                            !widget.editing &&
                            <span>
                                {widget.name}
                                <button className="btn btn-link pull-right" onClick={() => editWidget(widget)}>
                                    <i className="fa fa-pencil"/></button>
                            </span>
                        }

                    </li>)
            }
            <li className="list-group-item text-center">
                <button className="btn btn-primary" onClick={createWidget}>+</button>
            </li>
        </ul>
    </div>

export default WidgetList;
