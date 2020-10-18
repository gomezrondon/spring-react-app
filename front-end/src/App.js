import React, {Component, useEffect, useRef, useState} from 'react';
import './App.css';
import TodoList, {SecondComponent} from "./components/TodoList";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //  const dataTest = {id:1, name: "valor 1", complete:false}
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef() // is a hook


    //load
    useEffect(()=>{ // a hook
        clearLocalStorage();
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
            console.log("path 1")
        } else {
            console.log("path 2")
            findAllTodos();
        }
    },[]) // todo lo que cambie activara el useEffect

    //save
    useEffect(()=>{ // a hook
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    },[todos]) // todo lo que cambie activara el useEffect

    const clearLocalStorage=()=>{
        setInterval(function() {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            console.log("Clear local storage every 5 min")
        }, 5 * ( 60 * 1000 ) ); // ( 60 * 1000 ) = 1 minute

    }


    function saveTodo(newItem) {
        setTodos(prevState => {
            return [...prevState, newItem ]
        })
    }

    function addItem(name) {
        todoNameRef.current.value = null
        const newItem = {id: uuidv4(), name: name, complete: false};
        saveTodo(newItem);
        saveAllTodos(newItem)
    }

    const saveAllTodos = async (newItem)=> {
        console.log(">>>>> saveAllTodos")
        axios.put('http://localhost:8080/todos', newItem)
            .then(response => {
                console.log("items Saved Successfully!");
            });
    }

    const findAllTodos= () => {
        axios.get('http://localhost:8080/todos')
            .then(response => response.data)
            .then(data =>  {
                setTodos(data)
/*                console.log( data)
                console.log(">>>>> Fetching data "+ data.length)*/
            });
    }

    const deleteItem = async (itemLIst)=> {
        console.log(">>>>> delete list Items")
        itemLIst.forEach(id => {
            axios.delete('http://localhost:8080/todos/'+id)
                .then(response => {
                    if (response != null) {
                        console.log("items Deleted Successfully!");
                    }
                });
        })
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
        const completedTodos = todos.filter(todo => todo.complete).map(todo => todo.id)
        deleteItem(completedTodos)
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
