//factory function for creating project
const createProject = (projectName) => {
    const taskList = [];
    const numTasks = taskList.length;
    return {
        projectName,
        taskList,
        numTasks
    }
}

