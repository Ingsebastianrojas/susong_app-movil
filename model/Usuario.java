package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String email;

    private String password;

    @Column(name = "rol_user")
    private String rol;

    private Boolean activo;

    private String createdAt;

    //  SOLUCIÓN SI LOMBOK FALLA
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}