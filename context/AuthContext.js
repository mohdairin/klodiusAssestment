import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Login function
    const login = async (username, password) => {
        try {
            console.log('Attempting login with:', username, password);
            console.log('OG User', user);

            if (username == user.username && password == user.password) {
                const userData = {
                    username: username,
                    password: password,
                    email: user.email,
                };
                setUser(userData);
                return { success: true, user: userData };
            } else {
                return { success: false, message: 'Invalid credentials' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: error.message };
        }
    };

    const signup = async (username, password, email) => {
        try {
            if (username && password) {
                const userData = {
                    username: username,
                    password: password,
                    email: email,
                };
                setUser(userData);
                return { success: true, user: userData };
            } else {
                return { success: false, message: 'Please provide all required fields' };
            }
        } catch (error) {
            console.error('Signup error:', error);
            return { success: false, message: error.message };
        }
    };

    const logout = () => {
        setUser(null);
        console.log('User after logout:', user);
        return { success: true };
    };


    const isAuthenticated = () => {
        return user !== null;
    };

    const value = {
        user,
        login,
        signup,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};