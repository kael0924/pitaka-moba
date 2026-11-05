import { View, Text, ScrollView, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import WhiteCard from "../../Components/WhiteCard"
import ScreenHeader from "../../Components/ScreenHeader"
import Ionicons from '@expo/vector-icons/Ionicons'
import { notifs } from "../../Data/Seed"

function Notification() {
    return (
        <GradientBackground>
            <SafeAreaView>
                <FlatList
                    data={notifs}
                    keyExtractor={(item) => String(item.id)}
                    ListHeaderComponent={<ScreenHeader title="Notification" />}
                    renderItem={({item, index }) => {
                        const inFirst = index === 0
                        const inLast = index === notifs.length - 1
                        return (
                            <View
                                className={`bg-white pt-[24px] p-4 flex-row gap-3
                                ${inFirst ? "rounded-t-[32px] pt-4" : ""}
                                ${inLast ? "pb-4 mb-6" : ""}`}
                            >
                                <Ionicons name="warning" size={22} color="#f59e0b" />
                                <View className="flex-1">
                                    <Text className="font-semibold">{item.title}</Text>
                                    <Text className="text-gray-600">{item.description}</Text>
                                    <Text className="text-xs text-gray-400 mt-1">{item.date}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </SafeAreaView>
        </GradientBackground>
    )
}

    

export default Notification;