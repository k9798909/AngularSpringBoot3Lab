package com.example.mall.controllers;

import com.example.mall.dto.ProductDto;
import com.example.mall.model.ProductVo;
import com.example.mall.services.CheckoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;

    @PostMapping("/sunTotalPrice")
    public ResponseEntity<BigDecimal> sunTotalPrice(List<ProductDto> products) {
        return ResponseEntity
                .ok(checkoutService.sumTotalPrice(products));
    }
}
