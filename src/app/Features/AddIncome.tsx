import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import WhiteCard from "../../Components/WhiteCard"
import ScreenHeader from "../../Components/ScreenHeader"

function AddIncome() {
    return (
        <GradientBackground>
            <SafeAreaView>
                <ScreenHeader title = "Add Income" variant = "close"></ScreenHeader>
                <WhiteCard>
                    
                </WhiteCard>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default AddIncome;