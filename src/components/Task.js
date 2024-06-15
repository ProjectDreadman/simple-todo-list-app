import React from 'react';

const Task = ({ task, toggleComplete, removeTask, editTask }) => {
  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : '' }}>
        {task.text}
      </span>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
