package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") // permite conexión con React Native
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {

        Optional<Usuario> user = usuarioService.login(
                usuario.getEmail(),
                usuario.getPassword()
        );

        if (user.isPresent()) {
            return ResponseEntity.ok(user.get()); // login correcto
        } else {
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }


    @PostMapping("/registrar")
    public ResponseEntity<Usuario> registrar(@RequestBody Usuario usuario) {
        Usuario nuevo = usuarioService.registrar(usuario);
        return ResponseEntity.ok(nuevo);
    }
}