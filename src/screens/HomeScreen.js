import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Linking} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {

  const abrirSite = async () => {
    const url = 'https://www.gov.br/mma/pt-br';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert('Não foi possível abrir o site.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Recicla +</Text>
      <Text style={styles.subtitle}>Ajude a transformar o mundo com pequenas atitudes!</Text>

      <Text>Caso queira saber algo mais a fundo, Clique no botão abaixo {<Feather name='arrow-down' size={20}/>}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL("https://www.gov.br/mma/pt-br")}
        >
          <Feather name='chrome' size={20} color="white"/>
          <Text style={styles.buttonText}>  Visitar Site</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor:'#f5f5f5',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2e7d32',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color:'#444',
      textAlign: 'center',
      marginBottom: 20,
    },
    image: {
      width: 300,
      height: 170,
      borderRadius: 10,
      marginBottom: 15,
    },
    buttonContainer: {
      width: '100%',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#2e7d32',
      padding: 15,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
