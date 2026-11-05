import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import ScreenHeader from "../../Components/ScreenHeader"
import WhiteCard from "../../Components/WhiteCard"

function Activity() {
    return(
        <GradientBackground>
            <SafeAreaView>
                <ScreenHeader title="Activity" variant="close"></ScreenHeader>
                <WhiteCard></WhiteCard>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Activity;