package com.example.mall.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CartProductDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String id;
	private String name;
	private BigDecimal price;
	private Integer quantity;
	
	public CartProductDto(ProductDto productDto) {
		this.id = productDto.getId();
		this.name = productDto.getName();
		this.price = productDto.getPrice();
		this.quantity = productDto.getQuantity();
	}
}
