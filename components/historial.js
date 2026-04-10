<Text>Historial</Text>

{pedidos.map(p => (
  <View key={p.id}>
    <Text>Pedido #{p.id}</Text>
    <Text>Total: ${p.total}</Text>
  </View>
))}