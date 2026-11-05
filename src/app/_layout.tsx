import { SplashScreen, Stack, usePathname, useSegments } from "expo-router" // [debug] usePathname, useSegments
import { AuthProvider, useAuth } from '../context/AuthContext'
import "../styles/global.css"

SplashScreen.preventAutoHideAsync();

function SplashScreenController() {

    const { isLoading } = useAuth()

    if (!isLoading) {
        SplashScreen.hide();
    }

    return null;
}

function RootLayoutNav() {

    const { isAuthenticated, isLoading } = useAuth()
    const pathname = usePathname() // [debug]
    const segments = useSegments() // [debug]
    console.log('[debug] RootLayoutNav', { isAuthenticated, isLoading, pathname, segments }) // [debug]

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isAuthenticated}>
                <Stack.Screen name="(tabs)" />
            </Stack.Protected>

            <Stack.Protected guard={!isAuthenticated}>
                <Stack.Screen name="(auth)" />
            </Stack.Protected>
        </Stack>
    );
}

function RootLayout() {
    return (
        <AuthProvider>
            <SplashScreenController />
            <RootLayoutNav />
        </AuthProvider>
    )
}

export default RootLayout;
