package com.gomezrondon.springreactapp.controller;

import com.gomezrondon.springreactapp.entity.Todo;
import com.gomezrondon.springreactapp.repository.TodosRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TodoController {

    private final TodosRepository repository;

    public TodoController(TodosRepository repository) {
        this.repository = repository;
    }


    @GetMapping("/todos")
    public List<Todo> getAllTodos() {
        List<Todo> all = repository.findAll();
        return all;
    }

    @PutMapping("/todos")
    public void saveTodoItem(@RequestBody Todo newItem) {
        System.out.println(">>> put: "+newItem.toString());
        repository.save(newItem);
    }

    @DeleteMapping("/todos")
    public void deletByList(@RequestBody List<Todo> todoList) {
        repository.deleteAll(todoList);

    }

}
