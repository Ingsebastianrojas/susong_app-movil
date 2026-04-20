package com.example.demo.service;

import com.example.demo.model.Pedido;
import com.example.demo.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository repo;

    public Pedido guardar(Pedido pedido) {
        return repo.save(pedido);
    }

    public List<Pedido> obtenerTodos() {
        return repo.findAll();
    }

    public List<Pedido> obtenerPorUsuario(Long usuarioId) {
        return repo.findByUsuarioId(usuarioId);
    }

    public List<Pedido> obtenerPorEstado(String estado) {
        return repo.findByEstado(estado);
    }

    public Pedido actualizarEstado(Long id, String estado) {
        Pedido pedido = repo.findById(id).orElseThrow();
        pedido.setEstado(estado);
        return repo.save(pedido);
    }
}