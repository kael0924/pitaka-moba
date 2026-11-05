import { Stack } from 'expo-router'

function AuthLayout() {
    console.log('[debug] AuthLayout mounted') // [debug]
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="EmailSignInScreen" />
            <Stack.Screen name="OnboardingScreen" />
            <Stack.Screen name="CreateAccountScreen" />
            <Stack.Screen name="PinScreen" />
            <Stack.Screen name="ForgotPinScreen" />
            <Stack.Screen name="NewPinScreen" />
        </Stack>
    )
}

export default AuthLayout;