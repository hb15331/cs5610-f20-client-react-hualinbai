import React from "react";


const ImageWidget = ({widget, deleteWidget, editWidget, okWidget, updateWidget}) =>
    <div>

        {
            widget.editing &&
            <div className="mb-3">
                <h3>
                    Image Widget
                    <span className="pull-right form-inline">
                    <button className="btn btn-warning">
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
                </h3>

                <input className="form-control mt-3"
                       placeholder="Image URL"
                       onChange={(event) =>
                           updateWidget({
                               ...widget,
                               url: event.target.value
                           })}
                       value={widget.url}
                />

                <input className="form-control mt-3"
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
                <div className="mt-3">
                    {/*<img src="http://lorempixel.com/300/150/"/>*/}
                    <img src={widget.url}/>
                </div>

            </h3>
        </div>

    </div>




export default ImageWidget;