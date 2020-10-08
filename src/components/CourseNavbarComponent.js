import React from "react";

const CourseNavbarComponent = () =>

    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <a className="navbar-brand d-none d-sm-block" href="#">Course Manager</a>
        <button className="navbar-toggler wbdv-field wbdv-hamburger"
                type="button"
                data-toggle="collapse"
                data-target="#hidden-dropdown">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"
             id="hidden-dropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="login/login.template.client.html">Log in</a></li>
                <li className="nav-item">
                    <a className="nav-link" href="user-admin/user-admin.template.client.html">User Admin</a></li>
            </ul>
        </div>

        <form className="form-inline">
            <label htmlFor="title-fld" className="wbdv-label wbdv-course-manager"></label>
            <div className="input-group">
                <input type="text"
                       id="title-fld"
                       className="form-control wbdv-field wbdv-new-course"
                       placeholder="New course title"/>
                    <div className="input-group-append">
                        <button className="btn btn-success wbdv-button wbdv-add-course" type="submit">+</button>
                    </div>
            </div>
        </form>

    </nav>
    </div>

export default CourseNavbarComponent;