import React, {Component, useEffect, useRef, useState} from 'react';
import './App.css';
import TodoList, {SecondComponent} from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //  const dataTest = {id:1, name: "valor 1", complete:false}
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef() // is a hook


    //load
    useEffect(()=>{ // a hook
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) {
            setTodos(storedTodos);
            console.log("path 1")
        } else {
            console.log("path 2")
            fetchItem();
        }
    },[]) // todo lo que cambie activara el useEffect

    //save
    useEffect(()=>{ // a hook
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    },[todos]) // todo lo que cambie activara el useEffect


    function saveTodo(newItem) {
        setTodos(prevState => {
            return [...prevState, newItem ]
        })
    }

    function addItem(name) {
        todoNameRef.current.value = null
        const newItem = {id: uuidv4(), name: name, complete: false};
        saveTodo(newItem);
    }

    const fetchItem= async () => {
        const data = await fetch('http://localhost:8080/todos');
        let listTodos = await data.json()
        setTodos(listTodos)
        console.log(listTodos)
        console.log(">>>>> Fetching data "+listTodos.length)

    }



    function handleEnter(event) {
        const name = todoNameRef.current.value
        if (event.key === 'Enter' && name !== '') {
            // console.log(name)
            addItem(name);
        }

    }

    function handleAddTodo(event) {
        const name = todoNameRef.current.value
        if(name === '') return
     //    console.log(name)
        addItem(name);
    }

    function toggleTodoItem(id) {
        const newTodos = [...todos] // make copy of todos list
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleCleanUp() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <div className="App">
            <h1>TodoList</h1>
            <TodoList todos={todos}  toggleItem={toggleTodoItem}/>
            <input placeholder={"todo item..."} ref={todoNameRef}  onKeyDown={handleEnter} type={"text"}/>
            <button onClick={handleAddTodo} >Add todo</button>
            <button onClick={handleCleanUp}>Clear completed</button>
            <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        </div>
    );

}


export default App;
