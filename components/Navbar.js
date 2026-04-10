
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Navbar({ setScreen, theme }) {
  return (
    <View style={[styles.navbar, theme.navbar]}>

<TouchableOpacity onPress={() => setScreen('home')} style={styles.item}>
  <MaterialIcons name="home" size={24} color={theme.text.color} />
  <Text style={theme.text}>Home</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setScreen('menu')} style={styles.item}>
  <MaterialIcons name="restaurant-Menu" size={24} color={theme.text.color} />
  <Text style={theme.text}>Menú</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setScreen('pedidos')} style={styles.item}>
  <MaterialIcons name="shopping-cart" size={24} color={theme.text.color} />
  <Text style={theme.text}>Pedidos</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setScreen('config')} style={styles.item}>
  <MaterialIcons name="settings" size={24} color={theme.text.color} />
  <Text style={theme.text}>Config</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    color: '#fd0707',
  },
  item: {
    alignItems: 'center',
  },
});