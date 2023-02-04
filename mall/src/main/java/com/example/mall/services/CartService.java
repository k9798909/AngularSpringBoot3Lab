package com.example.mall.services;

import java.util.List;
import java.util.Optional;


import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import com.example.mall.dto.CartProductDto;

@Service
public class CartService {
	public void addCart(List<CartProductDto> cartData,CartProductDto addProduct) {
		Optional<CartProductDto> orgCartProductDto = cartData.stream()
				.filter(t -> isSameProduct(t,addProduct.getId()))
				.findAny();
		
		if (orgCartProductDto.isPresent()) {
			orgCartProductDto.get()
					.setQuantity(orgCartProductDto.get().getQuantity() + addProduct.getQuantity());
		} else {
			cartData.add(addProduct);
		}
	}
	
	public void deleteCart(List<CartProductDto> cartData,String id) {
		cartData.removeIf(t -> this.isSameProduct(t,id));
	}
	
	private boolean isSameProduct(@NotNull CartProductDto cartData, String id) {
		return StringUtils.equals(cartData.getId(), id);
	}
}
