import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FormScreen() {
    const navigation = useNavigation();
    const [nomeLocal, setNomeLocal] = useState('');
    const [tipoLixo, setTipoLixo] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [observacoes, setObservacoes] = useState('');

    useEffect(() => {
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.erro) {
                        Alert.alert('CEP inválido', 'Não foi possível encontrar o endereço.');
                        setEndereco(null);
                    } else {
                        setEndereco(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
                    }
                })
                .catch(() => {
                    Alert.alert('Erro', 'Falha ao buscar o endereço.');
                    setEndereco(null);
                });
        } else {
            setEndereco(null);
        }
    }, [cep]);

    const handleSubmit = async () => {
        if (!nomeLocal || !tipoLixo || !cep) {
            Alert.alert('Campos obrigatórios', 'Preencha todos os campos obrigatórios.');
            return;
        }

        const novoRegistro = {
            nomeLocal,
            tipoLixo,
            cep,
            endereco,
            observacoes,
            data: new Date().toISOString()
        };

        try {
            const dadosAntigos = await AsyncStorage.getItem('@pontos_coleta');
            const lista = dadosAntigos ? JSON.parse(dadosAntigos) : [];
            lista.push(novoRegistro);

            await AsyncStorage.setItem('@pontos_coleta', JSON.stringify(lista));

            Alert.alert('Salvo!', 'Seu ponto de coleta foi salvo localmente.');
            
            setNomeLocal('');
            setTipoLixo('');
            setCep('');
            setEndereco(null);
            setObservacoes('');

        } catch (error) {
            Alert.alert('Erro', 'Não foi possível salvar os dados.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Indique um ponto de descarte</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do local"
                value={nomeLocal}
                onChangeText={setNomeLocal}
            />

            <TextInput
                style={styles.input}
                placeholder="Tipo de lixo aceito"
                value={tipoLixo}
                onChangeText={setTipoLixo}
            />

            <TextInput
                style={styles.input}
                placeholder="CEP (somente números)"
                keyboardType="numeric"
                maxLength={8}
                value={cep}
                onChangeText={setCep}
            />

            {endereco && (
                <Text style={styles.endereco}>📍 {endereco}</Text>
            )}

            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Observações"
                multiline
                value={observacoes}
                onChangeText={setObservacoes}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar Ponto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f9f9f9',
        padding: 20
    },
    iconBack: {
        alignSelf: 'flex-start',
        marginBottom: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    endereco: {
        fontSize: 16,
        marginBottom: 15,
        color: '#2e7d32',
        fontWeight: '500'
    },
    button: {
        backgroundColor: '#2e7d32',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
