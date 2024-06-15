import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = id => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = id => {
    const newText = prompt('Edit the task:', tasks.find(task => task.id === id).text);
    if (newText) {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        removeTask={removeTask} 
        editTask={editTask} 
      />
    </div>
  );
};

export default App;
