package com.example.mall.model;

import java.io.Serializable;
import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document("product")
@Data
@NoArgsConstructor
public class ProductVo implements Serializable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
    private String id;
    private String name;
    private String description;
    private BigDecimal price;
    private Integer quantity;
    private byte[] img;
}
