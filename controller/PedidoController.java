package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {

        Optional<Usuario> user = usuarioService.login(
                usuario.getEmail(),
                usuario.getPassword()
        );

        if (user.isPresent()) {
            return user.get();
        } else {
            throw new RuntimeException("Credenciales incorrectas");
        }
    }

    @PostMapping("/registrar")
    public Usuario registrar(@RequestBody Usuario usuario){
        return usuarioService.registrar(usuario);
    }
}