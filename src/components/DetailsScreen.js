import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function DetailsScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>           
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("Home")}
            />
            </View>
            <View style={styles.buttonContainer}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
        </View>
    );
}

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
    buttonContainer: {
        width: windowWidth * 0.5,
        margin: 10,
        backgroundColor: '#add8e6',
        borderRadius: 5,
    },
}); 