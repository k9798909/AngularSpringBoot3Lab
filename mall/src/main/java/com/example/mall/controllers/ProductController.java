package com.example.mall.controllers;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mall.model.ProductVo;
import com.example.mall.services.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping("/create")
	public ResponseEntity<String> create() throws Exception {
		productService.create();
		return ResponseEntity.ok("Create Success");
	}

	@GetMapping
	public ResponseEntity<List<ProductVo>> getAll() throws Exception {
		return ResponseEntity.ok(productService.getAll());
	}

	@GetMapping(value = "/image/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
	public ResponseEntity<byte[]> getImage(@PathVariable("id")String id) throws IOException {
		byte[] file = productService.findById(id).map(t -> t.getImg()).orElse(null);
	    return ResponseEntity.ok(file);
	}
}
