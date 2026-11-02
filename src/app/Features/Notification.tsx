import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Gradientbackground from "../../Components/GradientBackground"
import WhiteCard from "../../Components/WhiteCard"
import ScreenHeader from "../../Components/ScreenHeader"

function Notification() {
    return (
        <Gradientbackground>
            <SafeAreaView>
                <ScreenHeader title = "Notification">
                </ScreenHeader>
                <WhiteCard></WhiteCard>
            </SafeAreaView>
        </Gradientbackground>
    );
}

export default Notification;