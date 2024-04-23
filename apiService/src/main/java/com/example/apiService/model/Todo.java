package com.example.apiService.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Table(name="TODO")
@Entity
public class Todo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TASK")
    private String task;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt;

    @Column(name = "COMPLETED")
    private Boolean completed;

    @Column(name = "COMPLETED_AT")
    private LocalDateTime completedAt;

    @Column(name = "DELETED")
    private Boolean deleted;

    @Column(name = "DELETED_AT")
    private LocalDateTime deletedAt;
}
