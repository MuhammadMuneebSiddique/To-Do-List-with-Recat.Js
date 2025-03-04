import React, { useState } from 'react'
import { ToDoCompleteItem, TodoItem } from './components/ToDoItem'
import { ToDoForm } from './components/ToDoForm'
import "./App.css"

const App = () => {

  const [inputValue , setinputValue] = useState({})
  const [task , setTask] = useState([])

  // get input value from Input Form and set input value in state
  const handleInputValue = (value) => {
    setinputValue({id:value , content:value , checked:false})
  }

  // handle form onSubmit click
  const handleSubmit = (event) => {
    event.preventDefault()
    handeAddTask()
  }

  // handle the user click the add task button
  const handeAddTask = () => {

    // handle input field is empty
    if(!inputValue.content) return;

    // handle the user add same task 
    const recheckedInputValue = task.find((curElem)=>curElem.content == inputValue.content)
    if(recheckedInputValue){
      setinputValue({id:"" , content:"" , checked:""})
      return
    }

    // tasks add in array
    setTask([...task , {id:inputValue.id , content:inputValue.content , checked:inputValue.checked}])
    setinputValue({id:"" , content:"" , checked:""})
  }

  // handle user click on complete button
  const handleIsTaskComplete = (data) => {
    const completedTask = task.map((curElem) => {
      if(curElem.id == data.id){
        return {...curElem , checked:true} 
      }
      return curElem
    })

    setTask(completedTask)
  }

  const handleTaskDelete = (data) => {
    const updatedData = task.filter((curElem)=>curElem.id !== data.id)
    return setTask(updatedData)
  }

  return (
    <>
    <h1>to do list</h1>
    <div className='to-do-container'>
      <ToDoForm handleSubmit={handleSubmit} handeAddTask={handeAddTask} handleInputValue={handleInputValue} data={inputValue} />

      {/* show tasks */}
      {task.length ?
      <div>
        <h2>to do tasks</h2>
        <div className='to-do-task-container'>
          {task.map((curElem,index)=>{
            if(!curElem.checked){
              return <TodoItem key={index} data={curElem} handleTaskDelete={handleTaskDelete} handleIsTaskComplete={handleIsTaskComplete} />
            }
          })}
        </div>
      </div>
      : <></>}

      {/* show complete tasks */}
      {task.length ? 
      <div>
        <h2>Done</h2>
        <div className='to-do-task-container'>
          {task.map((curElem , index)=>{
            if(curElem.checked){ return <ToDoCompleteItem key={index} data={curElem}/> }
          })}
        </div>
      </div>
      : <></> }
    </div>
    </>
  )
}

export default App
