import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const getLocalStorage = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      return storedTodos;
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(getLocalStorage());
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedInputValue = localStorage.getItem('inputValue');
    if (storedInputValue) {
      setInputValue(storedInputValue);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue,
      };

      setTodos([...todos, newTodo]);
      setInputValue('');

      localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list-container">
      <h2>List You Need</h2>
      <div className="add-todo-container">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="type something..." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-items-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}><i class='fas fa-times'></i></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
