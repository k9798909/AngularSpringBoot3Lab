package com.example.mall.services;

import com.example.mall.dto.ProductDto;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class CheckoutService {

    public BigDecimal sumTotalPrice(List<ProductDto> products) {
        return products.stream()
                .map(t -> Optional.ofNullable(t.getPrice()).orElse(BigDecimal.ZERO))
                .reduce(BigDecimal.ZERO,BigDecimal::add);
    }
}
