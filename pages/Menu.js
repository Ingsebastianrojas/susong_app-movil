import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Menu({ theme, carrito, setCarrito }) {

  const nuevosProductos = [
    {
      id: 1,
      nombre: 'Chispa & Crujido',
      descripcion: 'Explosión de sabor en cada mordida',
      precio: 6.50,
      imagen: 'https://i.pinimg.com/1200x/32/ee/85/32ee85a332705e0da35ec1995d792017.jpg'
    },
    {
      id: 2,
      nombre: 'Mega Burger',
      descripcion: 'Doble carne + queso',
      precio: 8.00,
      imagen: 'https://i.pinimg.com/1200x/2a/e2/cc/2ae2cca2df5c972d3e3928de84e1bc0e.jpg'
    },
    {
      id: 3,
      nombre: 'Papas Explosivas',
      descripcion: 'Con salsa especial',
      precio: 4.00,
      imagen: 'https://i.pinimg.com/1200x/5b/7c/f5/5b7cf559f5fc7a049855f564abe5f198.jpg'
    },
    {
      id: 4,
      nombre: 'Shake Loco',
      descripcion: 'Sabor a locura',
      precio: 3.50,
      imagen: 'https://i.pinimg.com/1200x/4d/ac/7c/4dac7c85fa68d7fd13ede4d9312d6fcd.jpg'
    },
    {
      id: 5,
      nombre: 'Papas Snap',
      descripcion: 'Crujientes y adictivas',
      precio: 4.50,
      imagen: 'https://i.pinimg.com/736x/bd/aa/ce/bdaace7bff63f65f711a717026c5e5e9.jpg'
    },
    {
      id: 6,
      nombre: 'Doble Queso',
      descripcion: 'Para los amantes del queso',
      precio: 7.00,
      imagen: 'https://i.pinimg.com/1200x/2a/e2/cc/2ae2cca2df5c972d3e3928de84e1bc0e.jpg'
    },
  ];

  return (
    <ScrollView style={[styles.container, theme.container]}>

      {/* PRODUCTOS (CARRUSEL) */}
      <Text style={[styles.sectionTitle, theme.text]}>
        Productos
      </Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {nuevosProductos.map((item) => (
          <TouchableOpacity key={item.id}>
            <Image 
              source={{ uri: item.imagen }}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* LISTA */}
      <Text style={[styles.sectionTitle, theme.text]}>
        Recién llegado
      </Text>

      {nuevosProductos.map((item) => (
        <View key={item.id} style={styles.newProduct}>

          <Image
            source={{ uri: item.imagen }}
            style={styles.newImage}
          />

          <View style={styles.newContent}>
            <Text style={[styles.newTitle, theme.text]}>
              {item.nombre}
            </Text>

            <Text style={theme.text}>
              {item.descripcion}
            </Text>

            <Text style={styles.price}>
              ${item.precio} USD
            </Text>

            {/* BOTÓN CARRITO */}
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => {
                const existe = carrito.find(p => p.id === item.id);

                if (existe) {
                  const nuevoCarrito = carrito.map(p =>
                    p.id === item.id
                      ? { ...p, cantidad: (p.cantidad || 1) + 1 }
                      : p
                  );

                  setCarrito(nuevoCarrito);
                  console.log("Carrito:", nuevoCarrito);

                } else {
                  const nuevoCarrito = [...carrito, { ...item, cantidad: 1 }];
                  setCarrito(nuevoCarrito);
                  console.log("Carrito:", nuevoCarrito);
                }
              }}
            >
              <Icon name="shopping-cart" size={20} color="#fff" />
              <Text style={styles.buttonText}> Agregar</Text>
            </TouchableOpacity>

          </View>

        </View>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },

  slider: {
    marginBottom: 20,
  },

  image: {
    width: 250,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
  },

  newProduct: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  newImage: {
    width: 100,
    height: 100,
    borderRadius: 10
  },

  newContent: {
    flex: 1,
    marginLeft: 10
  },

  newTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  price: {
    color: 'green',
    marginTop: 5
  },

  secondaryButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    marginLeft: 5
  }
});