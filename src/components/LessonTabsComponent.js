import React from "react";
import {editLesson} from "../actions/LessonActions";


const LessonTabsComponent = ({lessons, createLesson, deleteLesson, updateLesson, okLesson, editLesson}) =>

    <ul className="nav nav-tabs">
        {
            // each child in a list should have a unique key prop
            lessons.map(lesson =>
                <li className="nav-item" key={lesson._id}>
                    {
                        lesson.editing &&
                        <span>
                            <a className="nav-link" href="#">
                                <input onChange={(event) => updateLesson({
                                    ...lesson, name: event.target.value
                                })}
                                       value={lesson.name}/>
                                <button className="btn btn-link" onClick={() => deleteLesson(lesson)}>
                                    <i className="fa fa-close"/>
                                </button>
                                <button className="btn btn-link" onClick={() => okLesson(lesson)}>
                                    <i className="fa fa-check"/>
                                </button>
                            </a>
                        </span>
                    }
                    {
                        !lesson.editing &&
                        <span>
                        <a className="nav-link" href="#">
                            {lesson.name}
                            <button className="btn btn-link" onClick={() => editLesson(lesson)}><i className="fa fa-pencil"/></button>
                        </a>
                        </span>
                    }

                </li>)
        }
        <li className="nav-item"><button className="btn btn-primary" onClick={createLesson}>+</button></li>
    </ul>



export default LessonTabsComponent;

