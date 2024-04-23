package com.example.apiService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiService.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
