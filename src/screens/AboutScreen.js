import React from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Linking, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export default function AboutScreen() {
  const navigation = useNavigation();

  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert('Não foi possível abrir o link.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.iconBack}>
          <Icon name="arrow-left" size={28} color={ '#2e7d32'} />
      </TouchableOpacity>

      <Text style={styles.title}>Sobre os Desenvolvedores</Text>

      <View style={styles.card}>
        <View style={styles.personImg}>
          <Image source={require('../../assets/erick-img.png')} style={styles.image}/>
        </View>
        <View style={styles.personInfo}>
          <Text style={styles.name}>Luiz Eduardo</Text>
          <Text style={styles.info}>Turma: 2TDSPM</Text>
          <Text style={styles.info}>Instituição: FIAP</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => openLink('https://www.instagram.com/_lu1zedu_')}>
              <Icon name="instagram" size={30} color="#C13584" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://github.com/Lu1zEdu')}>
              <Icon name="github" size={30} color={'#000'} />
            </TouchableOpacity>

          </View>
        </View>
      </View>


      <View style={styles.card}>
        <View style={styles.personImg}>
          <Image source={require('../../assets/erick-img.png')} style={styles.image}/>
        </View>
        <View style={styles.personInfo}>

          <Text style={styles.name}>Erick Alves</Text>
          <Text style={styles.info}>Turma: 2TDSPM</Text>
          <Text style={styles.info}>Instituição: FIAP</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity onPress={() => openLink('https://www.instagram.com/erick_0105_')}>
              <Icon name="instagram" size={30} color="#C13584" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://github.com/Erick0105')}>
              <Icon name="github" size={30} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
    },
    iconBack: {
      alignSelf: 'flex-start',
      marginBottom: 10
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#2e7d32',
      marginBottom: 20,
    },
    card: {
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 20,
      width: '90%',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 4,
    },
    image: {
      width: 70,
      height: 100,
      borderRadius: 5,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'#333',
    },
    info: {
      fontSize: 14,
      color:'#666',
      marginBottom: 10,
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%',
      marginTop: 10,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2e7d32',
      padding: 12,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
