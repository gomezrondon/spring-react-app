package com.gomezrondon.springreactapp.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
public class Todo {
//{id: uuidv4(), name: name, complete: false};
    @Id
    public String id;
    public String name;
    public boolean complete;
    public LocalDateTime dateTime;

    public Todo() {
        this.dateTime = LocalDateTime.now();
    }

    public Todo(String id, String name, boolean complete) {
        this.id = id;
        this.name = name;
        this.complete = complete;
        this.dateTime = LocalDateTime.now();
    }


    @Override
    public String toString() {
        return "Todo{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", complete=" + complete +
                ", dateTime=" + dateTime +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }
}
