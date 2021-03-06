import React from "react";
import {connect} from "react-redux";
import {createModuleForCourse, deleteModule, updateModule} from "../services/ModuleService";
import {Link} from "react-router-dom";

export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";


const ModuleListComponent = ({course={}, modules=[], deleteModule, createModule, editModule, okModule, updateModule, moduleId}) =>

    <div>
        <h5 className="text-center">Modules for {course.title}</h5>
        <ul className="list-group">
            {

                modules.map(module =>

                    // highlight the current edited module
                    <li className={`list-group-item ${module.editing || module._id === moduleId
                        ? "active" : ""}`} key={module._id}>
                        {
                            !module.editing &&
                            <span>
                            <Link to={`/edit/${course._id}/modules/${module._id}`} className="text-dark">
                                {module.title}
                            </Link>
                            <button className="btn btn-link pull-right text-dark" onClick={() => editModule(module)}>
                                <i className="fa fa-pencil"/></button>
                            </span>
                        }
                        {
                            module.editing &&
                            <span>
                            <input onChange={event => updateModule({
                                ...module,
                                title: event.target.value
                            })}
                                   className="form-control"
                                   value={module.title}/>
                            <button className="btn btn-link pull-right text-danger" onClick={() => deleteModule(module)}>
                            <i className="fa fa-close"/></button>
                            <button className="btn btn-link pull-right text-success" onClick={() => okModule(module)}>
                                <i className="fa fa-check"/></button>
                            </span>
                        }
                    </li>
                )
            }
            <li className="list-group-item text-center">
                <button onClick={() => createModule(course)} className="btn btn-link">
                    <i className="fa fa-plus"/></button>
            </li>
        </ul>

    </div>


const stateToPropertyMapper = (state) => ({
    modules: state.moduleReducer.modules,
    // we render the lessons only when we click on the corresponding module
    // then module id is appended to url and saved in lesson state
    moduleId: state.lessonReducer.moduleId,
    // retrieve the course from course reducer
    course: state.courseReducer.course
})

const propertyToDispatchMapper = (dispatch) => ({

    deleteModule: (module) => deleteModule(module._id)
        .then(status => dispatch({
            type: DELETE_MODULE,
            module: module
        })),

    // first send the new module to server, once get confirmation from server then pass down to dispatcher
    // only initialize the module title, since id is generated by database
    // if id is initialized here, it would fail
    createModule: (course) => createModuleForCourse(course._id, {title: "New Module"})
        // would comeback with the actual module inserted to server
        // actual module has an id
        .then(actualModule => dispatch({
            type: CREATE_MODULE,
            module: actualModule
        })),

    // sends the final update to server
    okModule: (module) => updateModule(module._id, {...module, editing: false})
        .then(status => dispatch({
            type: UPDATE_MODULE,
            module: {...module, editing: false}
        })),

    // flip into field to make the element editable
    editModule: (module) => updateModule(module._id, {...module, editing: true})
        .then(status => dispatch({
            type: UPDATE_MODULE,
            module: {...module, editing: true}
        })),

    // maintain the intermediate updates in local state managed by reducer
    updateModule: (module) =>
        dispatch({
            type: UPDATE_MODULE,
            module: module
        })

        // updateModule(module._id, module)
        // .then(status => dispatch({
        //     type: UPDATE_MODULE,
        //     module: module
        // }))

})



export default connect(stateToPropertyMapper, propertyToDispatchMapper)(ModuleListComponent)
