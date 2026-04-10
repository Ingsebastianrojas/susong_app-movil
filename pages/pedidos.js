import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Pedidos({ carrito, setCarrito, pedidos, setPedidos, theme, user }) {

  const aumentar = (id) => {
    const nuevo = carrito.map(item =>
      item.id === id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    );
    setCarrito(nuevo);
  };

  const disminuir = (id) => {
    const nuevo = carrito
      .map(item =>
        item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
      .filter(item => item.cantidad > 0);

    setCarrito(nuevo);
  };

  const eliminar = (id) => {
    const nuevo = carrito.filter(item => item.id !== id);
    setCarrito(nuevo);
  };

  const total = carrito.reduce((sum, item) =>
    sum + item.precio * item.cantidad, 0
  );

  const finalizarCompra = async () => {

    if (carrito.length === 0) {
      alert("Carrito vacío");
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:8080/pedidos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: user?.id || 1, //  fallback temporal
          productos: carrito.map(item => item.nombre),
          total: total,
          direccion: "Mi casa",
          estado: "PENDIENTE",
          tokenEntrega: Math.random().toString(36).substring(2, 8)
        })
      });

      if (response.ok) {
        alert("Pedido guardado ");

        // opcional: guardar también local
        const nuevoPedido = {
          id: Date.now(),
          items: carrito,
          total
        };

        setPedidos([...pedidos, nuevoPedido]);
        setCarrito([]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={[styles.container, theme.container]}>

      <Text style={[styles.title, theme.text]}>Carrito</Text>

      {carrito.length === 0 && (
        <Text style={theme.text}>Tu carrito está vacío</Text>
      )}

      {carrito.map(item => (
        <View key={item.id} style={styles.card}>

          <Text style={theme.text}>{item.nombre}</Text>

          <Text style={theme.text}>
            ${item.precio} x {item.cantidad}
          </Text>

          <View style={styles.controls}>
            <TouchableOpacity onPress={() => disminuir(item.id)}>
              <Icon name="remove" size={25} />
            </TouchableOpacity>

            <Text style={theme.text}>{item.cantidad}</Text>

            <TouchableOpacity onPress={() => aumentar(item.id)}>
              <Icon name="add" size={25} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => eliminar(item.id)}>
              <Icon name="delete" size={25} color="red" />
            </TouchableOpacity>
          </View>

        </View>
      ))}

      <Text style={[styles.total, theme.text]}>
        Total: ${total.toFixed(2)}
      </Text>

      <TouchableOpacity style={styles.button} onPress={finalizarCompra}>
        <Text style={styles.buttonText}>Finalizar compra</Text>
      </TouchableOpacity>

      <Text style={[styles.title, theme.text]}>Historial</Text>

      {pedidos.map(p => (
        <View key={p.id} style={styles.card}>
          <Text style={theme.text}>Pedido #{p.id}</Text>
          <Text style={theme.text}>Total: ${p.total.toFixed(2)}</Text>
        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15

   },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },

  card: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    borderRadius: 10
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 10
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },

  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});