import React from 'react'
import "./ToDoItem.css"
import { MdDone , MdDeleteOutline } from "react-icons/md";

export const TodoItem = ({data , handleIsTaskComplete , handleTaskDelete }) => {
    return (
        <div className='to-do-item'>
            <h3 className='tasks'>{data.content}</h3>
            <div className='com-del-btn'>
                <MdDone className='complete' onClick={() => handleIsTaskComplete(data)}/>
                <MdDeleteOutline className="delete" onClick={() => handleTaskDelete(data)}/>
            </div>
        </div>
    )
}

export const ToDoCompleteItem = ({data}) => {
    return(
        <div className='to-do-item'>
            <h3 className='complete-tasks'>{data.content}</h3>
        </div>
    )
}
