import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ setUser, setScreen }) {

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = () => {

    if (!nombre || !contraseña) {
      alert("Completa todos los campos");
      return;
    }

    const usuario = {
      nombre,
      contraseña
    };

    console.log("Usuario logueado:", usuario);

    setUser(usuario);
    setScreen('home');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuario"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={contraseña}
        onChangeText={setContraseña}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8
  },

  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});