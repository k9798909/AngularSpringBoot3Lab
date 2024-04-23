package com.example.apiService.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.apiService.dto.TodoDto;
import com.example.apiService.services.TodoService;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController()
@RequestMapping("/todo")
public class TodoController {
    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/findAllUndeletedTodo")
    public ResponseEntity<List<TodoDto>> findAllUndeletedTodo() {
        return ResponseEntity.ok(todoService.findAllUndeletedTodo());
    }

    @PostMapping()
    public ResponseEntity<Void> add(@RequestBody TodoDto todoDto) {
        todoService.add(todoDto.getTask());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/editTask")
    public ResponseEntity<Void> editTask(@RequestBody TodoDto todoDto) {
        todoService.editTask(todoDto.getId(), todoDto.getTask());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/complete")
    public ResponseEntity<Void> complete(@RequestBody TodoDto todoDto) {
        todoService.complete(todoDto.getId());
        return ResponseEntity.ok().build();
    }

    @PutMapping("/updateForDelete")
    public ResponseEntity<Void> updateForDelete(@RequestBody TodoDto todoDto) {
        todoService.updateForDelete(todoDto.getId());
        return ResponseEntity.ok().build();
    }

}
