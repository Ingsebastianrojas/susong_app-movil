import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native'; // 

export default function HomeScreen({ theme }) {

  const [direccion, setDireccion] = useState('');

  return (
    <SafeAreaView style={[styles.container, theme.container]}> {/* */}

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={[styles.logo, theme.text]}>
          susong
        </Text>

        <TextInput
          placeholder="¿Dónde recibes tu pedido?"
          placeholderTextColor={theme.text.color}
          value={direccion}
          onChangeText={setDireccion}
          style={[styles.input, { color: theme.text.color }]}
        />
      </View>

      <ScrollView>

        {/*  OFERTA PRINCIPAL */}
        <View style={styles.mainOffer}>
          <Text style={styles.offerBadge}> 2x1 HOY </Text>

          <Image
            source={{ uri: 'https://i.pinimg.com/1200x/2c/4b/f2/2c4bf2eaf05c26905f3f505103208367.jpg' }}
            style={styles.offerImage}
          />

          <Text style={styles.offerTitle}>
            Nuggets Dorados
          </Text>

          <Text style={styles.oldPrice}>
            Antes $8.00
          </Text>

          <Text style={styles.newPrice}>
            2x1
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>Canjear 2x1</Text>
          </TouchableOpacity>
        </View>

        {/*  NUEVO PRODUCTO */}
        <Text style={[styles.sectionTitle, theme.text]}>
          Recién llegado
        </Text>

        <View style={styles.newProduct}>
          <Image
            source={{ uri: 'https://i.pinimg.com/1200x/32/ee/85/32ee85a332705e0da35ec1995d792017.jpg' }}
            style={styles.newImage}
          />

          <View style={styles.newContent}>
            <Text style={[styles.newTitle, theme.text]}>
              Chispa & Crujido
            </Text>

            <Text style={theme.text}>
              Explosión de sabor en cada mordida
            </Text>

            <Text style={styles.price}>
              $6.50 USD
            </Text>

            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.buttonText}>Probar ahora</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  RECOMENDADOS */}
        <Text style={[styles.sectionTitle, theme.text]}>
          Recomendados
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://i.pinimg.com/736x/bd/aa/ce/bdaace7bff63f65f711a717026c5e5e9.jpg' }}
              style={styles.cardImage}
            />
            <Text style={[styles.cardTitle, theme.text]}>
              Papas Snap
            </Text>
            <Text style={styles.price}>$4.50 USD</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://i.pinimg.com/1200x/4d/ac/7c/4dac7c85fa68d7fd13ede4d9312d6fcd.jpg' }}
              style={styles.cardImage}
            />
            <Text style={[styles.cardTitle, theme.text]}>
              Shake Loco
            </Text>
            <Text style={styles.price}>$3.50 USD</Text>
          </View>

        </ScrollView>

      </ScrollView>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({

  container: { flex: 1 },

  // parte superior 
  header: {
    paddingHorizontal: 15,
    paddingTop: 20, 
  },

  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  // 
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 12,
    padding: 10,
    borderRadius: 10
  },

 
  mainOffer: {
    backgroundColor: '#ff4d4d',
    margin: 10,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center'
  },

  offerBadge: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  offerImage: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginVertical: 10
  },

  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#fff'
  },

  newPrice: {
    fontSize: 20,
    color: 'yellow',
    fontWeight: 'bold'
  },

  /* NUEVO PRODUCTO */
  newProduct: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    margin: 10,
    borderRadius: 10,
    padding: 10
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
    fontSize: 18,
    fontWeight: 'bold'
  },

  /* BOTONES */
  primaryButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },

  secondaryButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

  /* CARDS */
  card: {
    width: 150,
    margin: 10,
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10
  },

  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },

  cardTitle: {
    fontWeight: 'bold',
    marginTop: 5
  },

  price: {
    color: 'green',
    marginTop: 5
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  }

});