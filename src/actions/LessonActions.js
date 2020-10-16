
export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"
export const UPDATE_LESSON = "UPDATE_LESSON"


export const createLesson = (dispatch) =>
    dispatch({type: CREATE_LESSON})


export const deleteLesson = (dispatch, lesson) =>
    dispatch({type: DELETE_LESSON, lesson: lesson})


export const updateLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: lesson})


export const okLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: false}})

export const editLesson = (dispatch, lesson) =>
    dispatch({type: UPDATE_LESSON, lesson: {...lesson, editing: true}})






