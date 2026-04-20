package com.example.demo.service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repo;

    public Optional<Usuario> login(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }

    public Usuario registrar(Usuario usuario) {

        return repo.save(usuario);
    }
}