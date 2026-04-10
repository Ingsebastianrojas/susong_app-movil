import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Navbar from './components/Navbar';
import Login from './pages/login';
import Home from './pages/Home';
import Pedidos from './pages/pedidos';
import Config from './pages/Config';
import Menu from './pages/Menu';

export default function App() {

  //  ESTADOS GLOBALES
  const [user, setUser] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [pedidos, setPedidos] = useState([]);

  const [screen, setScreen] = useState('home'); // 
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState(null);

  const theme = darkMode ? darkTheme : lightTheme;

  //  RENDER PRINCIPAL
  const renderScreen = () => {

    //  SI NO HAY USUARIO → LOGIN
    if (!user) {
      return <Login setUser={setUser} setScreen={setScreen} />;
    }

    switch (screen) {
      case 'home':
        return (
          <Home 
            theme={theme} 
            setScreen={setScreen} 
            setCategory={setCategory}
          />
        );

      case 'menu':
        return (
          <Menu 
            theme={theme} 
            category={category}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        );

      case 'pedidos':
        return (
          <Pedidos 
            theme={theme} 
            carrito={carrito}
            setCarrito={setCarrito}
            pedidos={pedidos}
            setPedidos={setPedidos}
            user={user}   
           />
        );

      case 'config':
        return <Config theme={theme} />;

      default:
        return null;
    }
  };

  return (
    <PaperProvider>
      <View style={[styles.container, theme.container]}>

        {/* CONTENIDO */}
        <View style={styles.content}>
          {renderScreen()}
        </View>

        {/*  BOTÓN DARK MODE  */}
        {user && (
          <TouchableOpacity
            style={[
              styles.darkButton,
              { backgroundColor: darkMode ? '#333' : '#eee' }
            ]}
            onPress={() => setDarkMode(!darkMode)}
          >
            <Image
              source={{
                uri: darkMode
                  ? 'https://i.pinimg.com/1200x/64/34/e6/6434e636052f9e8ef5d33039a42a37ad.jpg'
                  : 'https://i.pinimg.com/736x/e6/75/cd/e675cd065bfaf29606812f042f9aafcf.jpg'
              }}
              style={styles.darkIcon}
            />
          </TouchableOpacity>
        )}

        {/*  NAVBAR SOLO SI HAY USUARIO */}
        {user && <Navbar setScreen={setScreen} theme={theme} />}

      </View>
    </PaperProvider>
  );
}

/*  TEMAS */
const lightTheme = {
  container: { backgroundColor: '#fff' },
  navbar: { backgroundColor: '#ddd' },
  text: { color: '#000', fontSize: 16 },
};

const darkTheme = {
  container: { backgroundColor: '#121212' },
  navbar: { backgroundColor: '#1e1e1e' },
  text: { color: '#fff', fontSize: 16 },
};

/*  ESTILOS */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  darkButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 5,
    borderRadius: 25,
    elevation: 5,
  },

  darkIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});