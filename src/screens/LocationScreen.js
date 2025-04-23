import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function LocationScreen() {
    const navigation = useNavigation();

    const locais = [
        { id: '1', nome: 'EcoPonto Central', endereco: 'Rua das Flores, 123 - Centro', observacao: 'Ponto de coleta de materiais recicláveis.' },
        { id: '2', nome: 'Recicla Mais', endereco: 'Av. Verde, 456 - Bairro Jardim', observacao: 'Aceita apenas papel e plástico.' },
        { id: '3', nome: 'Ponto de Coleta Sul', endereco: 'Rua das Árvores, 789 - Zona Sul', observacao: 'Coleta de vidro e metais.' }
    ];


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Icon name="map-marker" size={24} color={'#2e7d32'} style={styles.icon} />
            <View>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.endereco}>{item.endereco}</Text>
                <Text style={styles.observacao}>{item.observacao}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Locais Cadastrados</Text>
            <FlatList
                data={locais}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.lista}
            />
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:'#f9f9f9',
            padding: 20
        },
        voltar: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20
        },
        voltarTexto: {
            color:'#2e7d32',
            fontWeight: 'bold',
            fontSize: 16
        },
        titulo: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#2e7d32',
            marginBottom: 10,
            textAlign: 'center'
        },
        lista: {
            paddingBottom: 30
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 15,
            marginBottom: 15,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 3
        },
        icon: {
            marginRight: 15
        },
        nome: {
            fontSize: 18,
            fontWeight: 'bold',
            color:  '#222'
        },
        endereco: {
            fontSize: 14,
            color:'#555'
        }
    });
