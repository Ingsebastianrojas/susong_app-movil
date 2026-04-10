package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //  RELACIÓN CON USUARIO
    private Long usuarioId;

    //  PRODUCTOS (simple por ahora)
    @ElementCollection
    private List<String> productos;

    //  TOTAL
    private Double total;

    //  DIRECCIÓN
    private String direccion;

    // ESTADO
    private String estado;
    // PENDIENTE, EN_PREPARACION, LISTO, EN_CAMINO, ENTREGADO

    //  TOKEN ENTREGA
    private String tokenEntrega;
}