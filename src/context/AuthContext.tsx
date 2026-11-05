import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import * as SecureStore from "expo-secure-store"

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    userToken: string | null;
    signIn: ( token: string ) => Promise<void>
    signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)
const TOKEN_KEY = 'user_session_token' //TODO: Change into actual key in integration 

export function AuthProvider({children}: {children: ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [userToken, setUserToken] = useState<any | null>(null)


    useEffect(()=> {
        async function restoreToken() {
            try {
                const token = await SecureStore.getItemAsync(TOKEN_KEY);

                if (token) {
                    setUserToken(token);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Failed to restore secure token: ', error);
            } finally {
                setIsLoading(false);
            }
        }

        restoreToken();
    }, [])


    const signIn = async (token: string) => {
        try {
            await SecureStore.setItemAsync(TOKEN_KEY, token);
            setUserToken(token);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Failed to save secure token: ', error);
        }
    }

    const signOut = async () => {
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            setUserToken(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Failed to delete secure token: ', error)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, userToken, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context;
}