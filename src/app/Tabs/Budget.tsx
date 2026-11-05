import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import ScreenHeader from "../../Components/ScreenHeader"
import WhiteCard from "../../Components/WhiteCard"

function Budget() {
    return(
        <GradientBackground>
            <SafeAreaView>
                <ScreenHeader title="Budget"></ScreenHeader>
                <WhiteCard></WhiteCard>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Budget;