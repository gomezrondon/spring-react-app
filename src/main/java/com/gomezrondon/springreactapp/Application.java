package com.gomezrondon.springreactapp;

import com.gomezrondon.springreactapp.entity.Todo;
import com.gomezrondon.springreactapp.repository.TodosRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;

@SpringBootApplication
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

		repository.save(new Todo((null), "hola mundo", LocalDateTime.now()));
		repository.findAll().forEach(System.out::println);
	}
}
