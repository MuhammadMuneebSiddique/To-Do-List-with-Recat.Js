import React from 'react'
import "./ToDoForm.css"
import { IoIosAdd } from "react-icons/io";


export const ToDoForm = ({handleInputValue , data , handleSubmit , handeAddTask }) => {

  return (
    <section className='to-do-form'>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder='Enter Task...' className='input-field' value={data.content} onChange={(event)=>handleInputValue(event.target.value)} />
        </form>
        <IoIosAdd onClick={handeAddTask} className='add-task'/>
    </section>
  )
}