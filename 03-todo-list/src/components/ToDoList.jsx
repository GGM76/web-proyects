import {useState} from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
    //Los estado de react sirven para guardar info para actualizar la vista cuando cambia
    const [inputValue, setInputValue] = useState('')
    const [todos, setTools] = useState([])
    const handleAdd = () => {
        if(inputValue.trim){
          setTools([... todos, inputValue])  
          setInputValue('')
        }
      }
    const handleDeleteItem = (index) =>{
        setTools(todos.filter((todo,i) => i !== index))    
    }
    return(
        <>
        <h1> Lista de tareas</h1>
        {/*Una forma comun de trabaj con inputs en react se usa onchange para guardar la info*/}
        <input 
            type='text' 
            value ={inputValue} 
            onChange={(event) => setInputValue(event.target.value)} 
        />

        <button onClick={handleAdd}> Agregar </button>
        <ul>
            {todos.map((todo,index) => (
                <ToDoItem 
                key={index} 
                todo={todo} 
                handleDelete={() => handleDeleteItem(index)}
                />
            )
            )}
        </ul>
        </>
    )
}

export default ToDoList