import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import BackButton from "../../Components/BackButton"
import GradientBackground from "../../Components/GradientBackground"
import WhiteCard from "../../Components/WhiteCard"
import { user } from "../../Data/Seed"

function Settings() {
    return (
        <GradientBackground>
            <SafeAreaView>
                <View className="flex-row justify-between items-center p-5">
                        <View className="flex-row items-center gap-5">
                            <View className="h-[55px] w-[55px] bg-white rounded-full justify-center items-center">
                                <Ionicons name="person" size={30} color="#0A6342"/>
                            </View>
                            <View>
                                <Text className="text-[24px] font-bold text-white">{user.name}</Text>
                                <Text className="font-semibold text-['#EBEBEB']">Edit Profile</Text>
                            </View>
                        </View>
                        <BackButton></BackButton>
                    </View>
                <WhiteCard></WhiteCard>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Settings;