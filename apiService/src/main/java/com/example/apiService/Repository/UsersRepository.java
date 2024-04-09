package com.example.apiService.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.apiService.model.Users;

public interface UsersRepository extends CrudRepository<Users, String> {
    List<Users> findByUsername(String username);
}
