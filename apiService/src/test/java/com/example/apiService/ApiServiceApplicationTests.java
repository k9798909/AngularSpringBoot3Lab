package com.example.apiService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.apiService.services.TodoService;

@SpringBootTest
class ApiServiceApplicationTests {

	@Autowired
	private TodoService todoService;

	@Test
	void contextLoads() {
	}

	@Test
	void testTodo() {
		todoService.add("test");
		System.out.println(todoService.findAllUndeletedTodo());
	}

}
