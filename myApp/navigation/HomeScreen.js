import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,Linking,useColorScheme} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function HomeScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === 'dark';

  const abrirSite = async () => {
    const url = 'https://www.gov.br/mma/pt-br';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert('Não foi possível abrir o site.');
    }
  };

  const styles = getStyles(darkMode);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Recicla+ 🌱</Text>
      <Text style={styles.subtitle}>Ajude a transformar o mundo com pequenas atitudes!</Text>


      {/*<Image source={require('../assets/recicla.jpg')} style={styles.image} />
      <Image source={require('../assets/recicla.jpg')} style={styles.image} />*/}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormScreen')}
        >
          <Icon name="edit" size={20} color="#fff" />
          <Text style={styles.buttonText}>  Preencher Formulário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('InfoScreen')}
        >
          <Icon name="info" size={20} color="#fff" />
          <Text style={styles.buttonText}>  Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={abrirSite}
        >
          <Icon name="public" size={20} color="#fff" />
          <Text style={styles.buttonText}>  Visitar Site Ambiental</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AboutScreen')}
        >
            <Icon name="person" size={20} color="#fff"/>
            <Text style={styles.buttonText}> Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LocationScreen')}
        >
            <Icon name="location-on" size={20} color="#fff"/>
            <Text style={styles.buttonText}>Locais Cadastrados</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const getStyles = (darkMode) =>
  StyleSheet.create({
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
