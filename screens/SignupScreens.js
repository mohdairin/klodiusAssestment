import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { signup } = useAuth();

    const handleSignup = async () => {
        if (!username || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Error', 'Password must be at least 6 characters');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address');
            return;
        }

        const result = await signup(username, password, email);

        if (result.success) {
            Alert.alert('Success', 'Account created successfully!', [
                { text: 'OK', onPress: () => navigation.navigate('Login') }
            ]);
        } else {
            Alert.alert('Error', result.message || 'Signup failed');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Text style={styles.title}> Create Account 📝</Text>

            < View style={styles.inputContainer} >
                <Text style={styles.label}> Username </Text>
                < TextInput
                    style={styles.input}
                    placeholder="Choose a username"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Text style={styles.label}> Email </Text>
                < TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />

                <Text style={styles.label}> Password </Text>
                < View style={styles.passwordContainer} >
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Create a password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword
                        }
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Text style={styles.eyeIconText}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </Text>
                    </TouchableOpacity>
                </View>

                < Text style={styles.label} > Confirm Password </Text>
                < View style={styles.passwordContainer} >
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <Text style={styles.eyeIconText}>
                            {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            < View style={styles.buttonContainer} >
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleSignup}
                >
                    <Text style={styles.buttonText}> Sign Up </Text>
                </TouchableOpacity>

                < TouchableOpacity
                    style={[styles.button, styles.secondaryButton]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}> Already have an account ? Login </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        maxWidth: 300,
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        marginTop: 15,
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        fontSize: 16,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
    },
    eyeIcon: {
        padding: 10,
    },
    eyeIconText: {
        fontSize: 20,
    },
    buttonContainer: {
        width: '100%',
        maxWidth: 300,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#6200ee',
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
});