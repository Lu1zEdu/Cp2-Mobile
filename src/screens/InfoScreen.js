import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function InfoScreen() {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    const abrirLink = async () => {
        const url = 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/consumo_consciente/reciclagem/';
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('Erro', 'Não foi possível abrir o link.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.iconBack}>
                <Icon name="arrow-left" size={28} color={ '#2e7d32'} />
            </TouchableOpacity>

            <Text style={styles.title}>🌎 Por que Reciclar?</Text>
            <Text style={styles.text}>
                <Icon name="recycle" size={22} color={'#2e7d32'} /> A reciclagem ajuda a preservar o meio ambiente, reduz a poluição e ainda gera empregos.
            </Text>

            <Text style={styles.title}>📚 Guia Completo de Reciclagem</Text>

            <Text style={styles.sectionTitle}>♻️ Materiais Recicláveis</Text>
            <Text style={styles.text}>
                <Text style={styles.bold}>🟦 Papel:</Text> Jornais, revistas, folhas usadas, caixas de papelão, cadernos (sem espiral), envelopes.{'\n\n'}
                <Text style={styles.bold}>🟨 Plástico:</Text> Garrafas PET, potes de shampoo, sacolas, copos, tampas. Lave antes de descartar.{'\n\n'}
                <Text style={styles.bold}>🟥 Metal:</Text> Latas de alumínio/aço, tampinhas, pregos, panelas sem cabo.{'\n\n'}
                <Text style={styles.bold}>🟩 Vidro:</Text> Garrafas, frascos de perfumes e potes. Embale cacos para segurança.
            </Text>

            <Text style={styles.sectionTitle}>🚫 Materiais Não Recicláveis</Text>
            <Text style={styles.text}>
                Fraldas, papel higiênico, espelhos, cerâmica, porcelana, isopor sujo, embalagens metalizadas, papel carbono, esponjas de aço e restos de comida.
            </Text>

            <Text style={styles.sectionTitle}>📦 Como Separar Corretamente</Text>
            <Text style={styles.text}>
                🔹 Lave embalagens com restos de alimento.{'\n'}
                🔹 Retire etiquetas ou tampas.{'\n'}
                🔹 Armazene recicláveis secos e limpos.{'\n'}
                🔹 Separe o lixo comum dos recicláveis.{'\n'}
                🔹 Sinalize caixas com vidro quebrado.
            </Text>

            <Text style={styles.sectionTitle}>🌱 Benefícios da Reciclagem</Text>
            <Text style={styles.text}>
                Reciclar economiza energia, reduz o uso de matérias-primas, evita o acúmulo de lixo nos aterros e ajuda a combater a poluição. Cada atitude conta!
            </Text>

            <Text style={styles.footerText}>♻️ Faça sua parte. A natureza agradece!</Text>

            <TouchableOpacity style={styles.button} onPress={abrirLink}>
                <Icon name="web" size={20} color="#fff" />
                <Text style={styles.buttonText}>  Saiba mais sobre reciclagem</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: '#f9f9f9',
            alignItems: 'center'
        },
        iconBack: {
            alignSelf: 'flex-start',
            marginBottom: 10
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            color:'#2e7d32',
            marginVertical: 15,
            textAlign: 'center'
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
            marginTop: 20,
            marginBottom: 10
        },
        text: {
            fontSize: 17,
            lineHeight: 26,
            color:'#444',
            textAlign: 'justify'
        },
        bold: {
            fontWeight: 'bold',
            color:'#000'
        },
        footerText: {
            marginTop: 30,
            fontSize: 18,
            fontWeight: '600',
            color:'#2e7d32',
            textAlign: 'center'
        },
        button: {
            backgroundColor: '#2e7d32',
            padding: 15,
            borderRadius: 12,
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
        }
    });
