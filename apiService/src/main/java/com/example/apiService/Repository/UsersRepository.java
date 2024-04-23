package com.example.apiService.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.apiService.model.Users;

public interface UsersRepository extends JpaRepository<Users, String> {
    List<Users> findByUsername(String username);
}
