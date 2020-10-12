const initialState = {
    communications: {
        title: "This is the communication",
        msg: "WebDev Rocks!!! YAY!!!"
    },
    count: 123
}

// FSM calculates new state based on current state and action
const fsm = (state = initialState, action) => {
    switch(action.type) {
        case "UP":
            return ({
                ...state,
                count: state.count + 1
            })
        case "DOWN":
            return ({
                ...state,
                count: state.count - 1
            })
        default:
            return state;
    }
}

export default fsm;