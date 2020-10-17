package com.gomezrondon.springreactapp.repository;

import com.gomezrondon.springreactapp.entity.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;



public interface TodosRepository extends MongoRepository<Todo, String> {
}
