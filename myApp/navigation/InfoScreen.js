import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Linking,
    Alert,
    useColorScheme
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function InfoScreen() {
    const colorScheme = useColorScheme();
    const darkMode = colorScheme === 'dark';

    const abrirLink = async () => {
        const url = 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/consumo_consciente/reciclagem/';
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert('Erro', 'Não foi possível abrir o link.');
        }
    };

    const styles = getStyles(darkMode);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Por que Reciclar?</Text>
            <Text style={styles.text}>
                <Icon name="recycle" size={20} color={darkMode ? '#90ee90' : '#2e7d32'} />
                {' '}
                A reciclagem ajuda a preservar o meio ambiente, reduz a poluição e ainda gera empregos.
            </Text>

            <Image
                style={styles.image}
                source={require('../assets/reciclagem1.png')}
            />
            <Image
                style={styles.image}
                source={require('../assets/reciclagem2.png')}
            />

            <Text style={styles.subtitle}>Tipos de lixo reciclável</Text>
            <Text style={styles.text}>
                ♻️ Papel: jornais, revistas, caixas{'\n'}
                ♻️ Plástico: garrafas PET, sacolas{'\n'}
                ♻️ Metal: latas de alumínio, tampinhas{'\n'}
                ♻️ Vidro: garrafas, potes{'\n\n'}
                ❌ Não reciclável: papel higiênico, espelhos, isopor sujo
            </Text>

            <TouchableOpacity style={styles.button} onPress={abrirLink}>
                <Icon name="web" size={20} color="#fff" />
                <Text style={styles.buttonText}>  Saiba mais sobre reciclagem</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const getStyles = (darkMode) =>
    StyleSheet.create({
        container: {
            padding: 20,
            backgroundColor: darkMode ? '#121212' : '#f9f9f9',
            alignItems: 'center'
        },
        title: {
            fontSize: 26,
            fontWeight: 'bold',
            color: darkMode ? '#90ee90' : '#2e7d32',
            marginBottom: 10
        },
        subtitle: {
            fontSize: 20,
            fontWeight: '600',
            marginTop: 20,
            marginBottom: 10,
            color: darkMode ? '#ffffff' : '#333'
        },
        text: {
            fontSize: 16,
            textAlign: 'center',
            color: darkMode ? '#ddd' : '#444',
            marginBottom: 10
        },
        image: {
            width: 250,
            height: 150,
            marginVertical: 10,
            borderRadius: 12
        },
        button: {
            backgroundColor: '#2e7d32',
            padding: 15,
            borderRadius: 10,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16
        }
    });
