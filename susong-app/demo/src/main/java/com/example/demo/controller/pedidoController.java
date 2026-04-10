package com.example.demo.controller;

import com.example.demo.model.Pedido;
import com.example.demo.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
package com.example.demo.controller;

import com.example.demo.model.Pedido;
import com.example.demo.service.PedidoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping("/usuario/{usuarioId}")
    public List<Pedido> obtenerPorUsuario(@PathVariable Long usuarioId) {
        return pedidoService.obtenerPorUsuario(usuarioId);
    }
}