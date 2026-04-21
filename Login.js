import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Login({ setUser, setScreen }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async () => {
  try {
    const response = await fetch('http://10.0.2.2:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      alert("Credenciales incorrectas");
      return;
    }

    const data = await response.json();

    if (!data || !data.id) {
      alert("Usuario no existe");
      return;
    }

    setUser(data);

    //  REDIRECCIÓN POR ROL
    if (data.rol === 'ADMIN') setScreen('admin');
    else if (data.rol === 'COCINERO') setScreen('cocina');
    else if (data.rol === 'REPARTIDOR') setScreen('reparto');
    else setScreen('home');

  } catch (error) {
    console.log(error);
    alert("Error conectando al servidor");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
        
        
      <TouchableOpacity onPress={() => setScreen('register')}>
      <Text style={{ textAlign: 'center', marginTop: 20, color: 'black' }}>
        Crear cuenta
      </Text>
      </TouchableOpacity>
    </View>
    
  );
}

/*  ESTILOS (ESTO TE FALTABA) */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
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