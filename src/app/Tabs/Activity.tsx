import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import ScreenHeader from "../../Components/ScreenHeader"

function Activity() {
    return(
        <GradientBackground>
            <SafeAreaView>
                <ScreenHeader title="Activity" variant = "close"></ScreenHeader>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Activity;