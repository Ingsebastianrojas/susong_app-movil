package com.example.demo.service;

import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario registrar(Usuario usuario){
        return usuarioRepository.save(usuario);
    }
    
    public Optional<Usuario> login(String email, String password){
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);

        if(usuario.isPresent() && usuario.get().getPassword().equals(password)){
            return usuario;
        }
        return Optional.empty();
    }
}