import React from "react";
import {Link} from "react-router-dom";


export default class CourseCardComponent extends React.Component {

    render() {

        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Card text.</p>
                    <Link className="btn btn-primary"
                          to={`/course/edit/${course.id}`}>More...</Link>
                </div>
            </div>
        )

    }



}

