export default function Pedidos({ carrito, setCarrito, pedidos, setPedidos, theme }) {

  const total = carrito.reduce((sum, item) =>
    sum + item.precio * item.cantidad, 0
  );

  const finalizarCompra = () => {
    setPedidos([...pedidos, {
      id: Date.now(),
      items: carrito,
      total
    }]);

    setCarrito([]);
  };

  return (
    <View>

      <Text>Carrito</Text>

      {carrito.map(item => (
        <Text key={item.id}>
          {item.nombre} x{item.cantidad}
        </Text>
      ))}

      <Text>Total: ${total}</Text>

      <TouchableOpacity onPress={finalizarCompra}>
        <Text>Comprar</Text>
      </TouchableOpacity>

    </View>
  );
}