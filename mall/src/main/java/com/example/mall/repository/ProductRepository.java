package com.example.mall.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.mall.model.ProductVo;

public interface ProductRepository extends MongoRepository<ProductVo, String> {

}
