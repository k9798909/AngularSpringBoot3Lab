package com.example.apiService.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.example.apiService.model.Users;
import com.example.apiService.utils.JwtTokenUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtils jwtTokenUtils;

    @PostMapping("/login")
    public ResponseEntity<LoginRes> login(@RequestBody LoginReq req) {
        try {
            // 用ProviderManager進行認證
            Authentication authenticate = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(req.username(), req.password()));

            // principal 認證前:username 認證後:Users object、credentials 認證前:密碼
            // 認證後:null、authorities 認証前:null，認証後:權限
            Users users = (Users) authenticate.getPrincipal();

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.AUTHORIZATION,
                            jwtTokenUtils.generateToken(users.getUsername()))
                    .body(new LoginRes(users.getUsername()));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("/validate")
    public ResponseEntity<Void> validate() {
        return ResponseEntity.ok().build();
    }

    public record LoginReq(String username, String password) {
    }

    public record LoginRes(String username) {
    }
}