import GradientBackground from "../../Components/GradientBackground"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function Settings() {
    return (
        <GradientBackground>
            <SafeAreaView>
                <Text>Settings Screen</Text>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Settings;