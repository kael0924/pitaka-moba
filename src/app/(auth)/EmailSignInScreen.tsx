import { View, Button, Text } from 'react-native'
import { useAuth } from '../../context/AuthContext'

function EmailSignInScreen() {

    const { signIn } = useAuth();
    console.log('[debug] EmailSignInScreen rendered') // [debug]

    const handleLoginPress = async () => {
        const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IktyaXN0aWFuIiwiZW1haWwiOiJrcmlzdGlhbkBleGFtcGxlLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

            
        await signIn(dummyToken);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login Account</Text>
            <Button title='Login' onPress={handleLoginPress}/>
        </View>
    )
}

export default EmailSignInScreen;