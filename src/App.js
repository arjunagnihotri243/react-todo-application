import React, {useState, useEffect} from 'react';
import './App.css';

// Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {


  // Functions and  Events
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }

  // States
  const [inputText, setInputText] = useState("");
  const [todos ,setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

    
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoFromLocal);
    }
  }

  // RUN ONCE WHEN APP STARTS
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  

  return (
    <div className="App">
      <header>
  <h1>Todo List App</h1>
      </header>
      <Form todos = {todos} setTodos = {setTodos} setInputText={setInputText} inputText = {inputText} setStatus={setStatus} />
      <TodoList todos={filteredTodos} setTodos = {setTodos}/>
    </div>
  );
    
}

export default App;
