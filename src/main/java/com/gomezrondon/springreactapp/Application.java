package com.gomezrondon.springreactapp;

import com.gomezrondon.springreactapp.entity.Todo;
import com.gomezrondon.springreactapp.repository.TodosRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootApplication
@RestController
@CrossOrigin("*")
public class Application implements CommandLineRunner {


	private final TodosRepository repository;

	public Application(TodosRepository repository) {
		this.repository = repository;
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	 	repository.save(new Todo(null, "Comprar tomates",false));
		repository.save(new Todo(null, "limpiar el cuarto",false));
		repository.save(new Todo(null, "botar la basura",false));
		repository.save(new Todo(null, "aprender React",false));
		repository.findAll().forEach(System.out::println);
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

}
