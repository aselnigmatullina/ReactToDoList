import React from 'react'
import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'

const styles = {
    ul:{
        listStyle: 'none',
        margin:0,
        padding:0,
        color: 'gray'
    }
}

 function ToDoList(props){
    return(
        <ul style = {styles.ul}>
         {
             props.todos.map((todo, index ) =>{
                 return < ToDoItem todo = {todo} key = {todo.id} index = {index} onChange = {props.onToggle} />
             })
         }


        </ul>
    )
}
ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default ToDoList