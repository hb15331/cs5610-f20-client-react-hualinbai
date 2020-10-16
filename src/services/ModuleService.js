
const courseUrl = "http://wbdv-generic-server.herokuapp.com/api/hualin/courses"
const moduleUrl = "http://wbdv-generic-server.herokuapp.com/api/hualin/modules"


// this service function retrieves the modules for a given course
// cares about the parent-child relationship
export const findModulesForCourse = (courseId) =>
    fetch(`${courseUrl}/${courseId}/modules`) // build the url
        .then(response => response.json())


export const createModuleForCourse = (courseId, newModule) =>
    fetch(`${courseUrl}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


// don't need to know the module to be removed belongs to any course
// so use moduleUrl
export const deleteModule = (moduleId) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateModule = (moduleId, newModule) =>
    fetch(`${moduleUrl}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(newModule),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => response.json())


