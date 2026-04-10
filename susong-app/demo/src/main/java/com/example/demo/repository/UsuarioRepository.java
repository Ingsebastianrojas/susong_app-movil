package com.example.demo.repository;

import com.example.demo.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
}




