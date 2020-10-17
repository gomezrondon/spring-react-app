package com.gomezrondon.springreactapp.configuration;


import com.gomezrondon.springreactapp.entity.Todo;
import com.gomezrondon.springreactapp.repository.TodosRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {

    private final TodosRepository repository;

    public Config(TodosRepository repository) {
        this.repository = repository;
    }


    @Bean
    CommandLineRunner bootCLRProd(){
        return args -> {
            repository.save(new Todo(null, "Create Back-end with Spring boot",false));
            repository.save(new Todo(null, "Create Front-end with React",false));
            repository.save(new Todo(null, "Cache data with local storage",false));
            repository.save(new Todo(null, "test load/reload/put/delete",false));
            repository.findAll().forEach(System.out::println);
        };
    }

}
