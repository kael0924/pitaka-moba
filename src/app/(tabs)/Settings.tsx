import GradientBackground from "../../Components/GradientBackground"
import { Text, View, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useAuth } from "../../context"

function Settings() {
    const { signOut } = useAuth();

    const handleOnLogoutPress = async () => {
        await signOut();
    }
    
    return (
        <GradientBackground>
            <SafeAreaView>
                <Text>Settings Screen</Text>
                <Text>Logout</Text>
                <Button title="logout" onPress={handleOnLogoutPress}/>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Settings;