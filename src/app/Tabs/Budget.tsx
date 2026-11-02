import GradientBackground from "../../Components/GradientBackground"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

function Budget() {
    return(
        <GradientBackground>
            <SafeAreaView>
                <Text>Budget Screen</Text>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Budget;