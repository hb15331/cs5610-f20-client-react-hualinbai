import React from "react";

const HeadingWidget = ({widget, deleteWidget, okWidget, updateWidget, editWidget}) =>
    <div>

        {/*{JSON.stringify(widget)}*/}

        {
            widget.editing &&
            <div className="mb-3">
            <div className="row">

                <div className="col-4">
                    <h3>Heading Widget</h3>
                </div>

                <div className="col-8">
                <span className="pull-right form-inline">
                    <button className="btn btn-warning"
                            //onClick={() => moveUp(widget)}
                    >
                        <i className="fa fa-arrow-up"/>
                    </button>
                    <button className="btn btn-warning">
                        <i className="fa fa-arrow-down"/>
                    </button>

                    <select className="form-control"
                            onChange={(event) =>
                                updateWidget({
                                    ...widget,
                                    type: event.target.value
                                })}
                            value={widget.type}
                    >
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="LIST">List</option>
                        <option value="IMAGE">Image</option>
                    </select>

                    <button className="btn btn-danger" onClick={() => deleteWidget(widget)}>
                        <i className="fa fa-trash"/>
                    </button>

                    <button className="btn btn-primary" onClick={() => okWidget(widget)}>
                        Save
                    </button>

                </span>
                </div>

            </div>

            <input onChange={(event) =>
                updateWidget({
                    ...widget,
                    text: event.target.value
                })}
                   className="form-control mt-2"
                   placeholder="Heading text"
                   value={widget.text}
            />

            <select className="form-control mt-2"
                    onChange={(event) =>
                        updateWidget({
                            ...widget,
                            size: parseInt(event.target.value)
                    })}
                    value={widget.size}
            >
                {/*<option value="">--Choose size--</option>*/}
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
                <option value="5">Heading 5</option>
                <option value="6">Heading 6</option>
            </select>

            <input className="form-control mt-2"
                   placeholder="Widget name"
                   onChange={(event) =>
                       updateWidget({
                           ...widget,
                           name: event.target.value
                       })}
                   value={widget.name}
            />
            </div>
        }

            <div>
                <h3>
                    Preview ({widget.name})
                    {
                        !widget.editing &&
                        <button onClick={() => editWidget(widget)} className="btn btn-warning pull-right">
                            <i className="fa fa-pencil"/>
                        </button>
                    }
                </h3>

                {
                    widget.size === 1 &&
                    <h1>{widget.text}</h1>
                }
                {
                    widget.size === 2 &&
                    <h2>{widget.text}</h2>
                }
                {
                    widget.size === 3 &&
                    <h3>{widget.text}</h3>
                }
                {
                    widget.size === 4 &&
                    <h4>{widget.text}</h4>
                }
                {
                    widget.size === 5 &&
                    <h5>{widget.text}</h5>
                }
                {
                    widget.size === 6 &&
                    <h6>{widget.text}</h6>
                }

            </div>

    </div>


export default HeadingWidget;