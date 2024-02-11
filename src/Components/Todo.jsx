import './CSS/Todo.css'

const Todo = () => {
  return (
    <div className='todo'>
      <div className='todo-header'>Todo List</div>
      <div className='todo-add'>
        <input type='text' placeholder='Add Your Task' className='todo-input'></input>
        <div className='todo-add-btn'>Add</div>
        </div>
        <div className='todo-list'>


      </div>
    </div>
  )
}

export default Todo
