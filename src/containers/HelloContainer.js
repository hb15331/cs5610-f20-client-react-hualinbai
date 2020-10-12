import React from "react";
import {connect} from "react-redux";
import Hello from "../components/Hello";


// maps the state information to props object (message)
// and passes down to component
const stateMapper = (state) => ({
    message: state.fsm.communications.msg
})

export default connect (stateMapper)(Hello);