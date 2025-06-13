import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const predefinedEmail = "user@example.com";
    const predefinedPassword = "password123";

    const handleLogin = () => {
        if (email === predefinedEmail && password === predefinedPassword) {
            navigation.replace("Home"); // Navega para HomeScreen sem opção de voltar
        } else {
            Alert.alert("Erro", "Credenciais inválidas. Tente novamente.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: "80%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export default LoginScreen;