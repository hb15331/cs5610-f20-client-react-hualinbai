
const moduleUrl = "http://wbdv-generic-server.herokuapp.com/api/hualin/modules"
const lessonUrl = "http://wbdv-generic-server.herokuapp.com/api/hualin/lessons"


export const findLessonsForModule = (courseId, moduleId) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`)
        .then(response => response.json())


export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${moduleUrl}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


export const updateLesson = (lesson) =>
    fetch(`${lessonUrl}/${lesson._id}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


export const deleteLesson = lessonId =>
    fetch(`${lessonUrl}/${lessonId}`, {
        method: "DELETE"
    }).then(response => response.json())









