package com.example.apiService.dto;

import com.example.apiService.model.Todo;
import com.example.apiService.utils.LocalDateUtils;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TodoDto {
    private Long id;
    private String task;
    private String createdAt;
    private boolean completed;
    private String completedAt;
    private boolean deleted;
    private String deletedAt;

    public TodoDto(Todo todo) {
        this.id = todo.getId();
        this.task = todo.getTask();
        this.createdAt = LocalDateUtils.formatLocalDateTime(todo.getCreatedAt());
        this.completed = todo.getCompleted();
        this.completedAt = LocalDateUtils.formatLocalDateTime(todo.getCompletedAt());
        this.deleted = todo.getDeleted();
        this.deletedAt = LocalDateUtils.formatLocalDateTime(todo.getDeletedAt());
    }
}
