import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';
export default function HomeScreen({ navigation }: { navigation: any }) {
    const { user, logout } = useAuth();

    const logoutMe = () => {
        const logoutResult = logout();
        if (logoutResult.success) {
            console.log('Check user logged out successfully', user);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });

        }
    }

    const redirectToLogin = () => {
        // navigation.replace('Login');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen 🏠</Text>
            <Text style={styles.subtitle}>Name:{user?.username}</Text>
            <Text style={styles.subtitle}>Password:{user?.password}</Text>
            <Text style={styles.subtitle}>Email:{user?.email}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={redirectToLogin}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonClear}
                    onPress={logoutMe}
                >
                    <Text style={styles.buttonText}>Logout And Clear Data</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 300,
    },
    button: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
    },

    buttonClear: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
    },
    secondaryButton: {
        backgroundColor: '#03dac6',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    info: {
        marginTop: 40,
        padding: 15,
        backgroundColor: '#e3f2fd',
        borderRadius: 8,
    },
    infoText: {
        color: '#1976d2',
        textAlign: 'center',
    },
});