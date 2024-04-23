package com.example.apiService.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.apiService.Repository.TodoRepository;
import com.example.apiService.dto.TodoDto;
import com.example.apiService.model.Todo;

@Service
public class TodoService {
    private TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    /**
     * 取得未刪除的待辦清單
     * 
     * @return
     */
    public List<TodoDto> findAllUndeletedTodo() {
        Todo conditionTodo = new Todo();
        conditionTodo.setDeleted(false);
        Example<Todo> example = Example.of(conditionTodo);
        Sort sort = Sort.by(Sort.Direction.DESC, "createdAt"); // 根据 createdAt 属性降序排序
        return todoRepository.findAll(example,sort).stream().map(TodoDto::new).collect(Collectors.toList());
    }

    /**
     * 新增待辦事項
     * 
     * @param task
     * @return
     */
    public Todo add(String task) {
        Todo todo = new Todo();
        todo.setTask(task);
        todo.setDeleted(false);
        todo.setCompleted(false);
        todo.setCreatedAt(LocalDateTime.now());
        return todoRepository.save(todo);
    }

    /**
     * 更新待辦事項
     * 
     * @param id
     * @param task
     * @return
     */
    public void editTask(Long id, String task) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("找不到需要更新的待辦事項"));
        todo.setTask(task);
        todoRepository.save(todo);
    }

    /**
     * 更新待辦事項的完成狀態
     * 
     * @param id
     * @param complete
     * @return
     */
    public void complete(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("找不到需要更新的待辦事項"));
        todo.setCompleted(true);
        todo.setCompletedAt(LocalDateTime.now());
        todoRepository.save(todo);
    }

    /**
     * 更新待辦事項的刪除狀態
     * 
     * @param id
     * @param delete
     * @return
     */
    public void updateForDelete(Long id) {
        Todo todo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("找不到需要更新的待辦事項"));
        todo.setDeleted(true);
        todo.setDeletedAt(LocalDateTime.now());
        todoRepository.save(todo);
    }

}
