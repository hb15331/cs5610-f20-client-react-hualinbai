import React from "react";
import {connect} from "react-redux";
import Counter from "../components/Counter";


const stateToPropertyMapper = (state) => ({
    count: state.fsm.count
})

const propertyToDispatchMapper = (dispatch) => ({
    // up is the props attribute mapped to a function
    // the argument of dispatch is action object
    up: () => dispatch({type: "UP"}),
    down: () => dispatch({type: "DOWN"})
})


export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(Counter);