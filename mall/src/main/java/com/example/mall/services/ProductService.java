package com.example.mall.services;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.List;

import com.example.mall.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import com.example.mall.model.ProductVo;

@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	ResourceLoader resourceLoader;

	public void create() throws IOException {
		byte[] fileByte1 = null;
		Resource resource1 = resourceLoader.getResource("classpath:static/images/testProduct1.jpg");
		try (BufferedInputStream bis = new BufferedInputStream(resource1.getInputStream());) {
			fileByte1 = bis.readAllBytes();
		}
		
		byte[] fileByte2 = null;
		Resource resource2 = resourceLoader.getResource("classpath:static/images/testProduct2.jpg");
		try (BufferedInputStream bis = new BufferedInputStream(resource2.getInputStream());) {
			fileByte2 = bis.readAllBytes();
		}
		
		byte[][] file = new byte[][] {fileByte1,fileByte2};

		Random rm = new Random();

		productRepository.deleteAll();
		for (int i = 0; i < 10; i++) {
			ProductVo product = new ProductVo();
			product.setId(i + "");
			product.setName("商品" + (i + 1));
			product.setPrice(new BigDecimal(rm.nextInt(0, 20) * 10));
			product.setQuantity(rm.nextInt(0, 10) * 5);
			product.setDescription("商品" + (i + 1) + "的介紹測試測試測試測試測試測試測試測試測xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx試測試xxxxxxxxxxxxxx");
			product.setImg(file[rm.nextInt(0, 2)]);
			productRepository.insert(product);
		}
	}

	public List<ProductVo> getAll() {
		return productRepository.findAll().stream().collect(Collectors.toList());
	}
	
	public Optional<ProductVo> findById(String id) {
		return productRepository.findById(id);
	}

	public void test1() {

	}


}
