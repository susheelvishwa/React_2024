import React from 'react'


function TaskItem({  title, isCompleted, assignee, priority }) {
    console.log(title);
    return (
    <div className="task-item">
        <p>Title: {title}</p>
        <p>Assignee: {assignee}</p>
        <p>Priority: {priority}</p>
        <p>Is Task Completed: {isCompleted ? "Yes" : "No"}</p>
    </div>
    );
}

export {TaskItem}

