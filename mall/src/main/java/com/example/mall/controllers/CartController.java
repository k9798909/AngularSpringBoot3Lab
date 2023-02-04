package com.example.mall.controllers;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.example.mall.dto.CartProductDto;
import com.example.mall.services.CartService;

@RestController
@RequestMapping("/cart")
@SessionAttributes(CartController.CART_SESSION)
public class CartController {

	public static final String CART_SESSION = "CART_SESSION";

	private CartService cartService;

	public CartController(CartService cartService) {
		this.cartService = cartService;
	}

	@GetMapping
	public ResponseEntity<List<CartProductDto>> getCart(@ModelAttribute(CART_SESSION) List<CartProductDto> cartData) {
		return ResponseEntity.ok().body(cartData);
	}

	@PostMapping
	public ResponseEntity<Map<String,String>> add(@ModelAttribute(CART_SESSION) List<CartProductDto> cartData,
			@RequestBody CartProductDto addProduct) {
		cartService.addCart(cartData, addProduct);
		Map<String,String> map = new HashMap<>();
		map.put("isAdd", "true");
		map.put("msg", "新增成功");
		return ResponseEntity.ok().body(map);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String,String>> delete(@ModelAttribute(CART_SESSION) List<CartProductDto> cartData,
			@PathVariable() String id) {
		cartService.deleteCart(cartData, id);
		Map<String,String> map = new HashMap<>();
		map.put("msg", "刪除成功");
		return ResponseEntity.ok().body(map);
	}
	
	@DeleteMapping("")
	public ResponseEntity<Map<String,String>> delete(@ModelAttribute(CART_SESSION) List<CartProductDto> cartData) {
		cartData.clear();
		Map<String,String> map = new HashMap<>();
		map.put("isClear", "true");
		map.put("msg", "清空成功");
		return ResponseEntity.ok().body(map);
	}

	@ModelAttribute(CART_SESSION)
	public List<CartProductDto> getSessionData() {
		return new LinkedList<>();
	}

}
