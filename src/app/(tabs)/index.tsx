import { View, Text, ScrollView, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import GradientBackground from "../../Components/GradientBackground"
import { user } from "../../Data/Seed"
import WhiteCardProps from "../../Components/WhiteCard"
import { router } from "expo-router"

const percent = (user.spent/user.budget) * 100;

function Dashboard() {
    console.log('[debug] Dashboard rendered') // [debug]
    return (
        <GradientBackground>
            <SafeAreaView>
                <View className = "p-5 flex-col gap-5">
                    <View className = "flex-row justify-between items-center">
                        <View className = "flex-row items-center gap-5">
                            <View className = "h-[55px] w-[55px] bg-white rounded-full justify-center items-center">
                                <Text>profile</Text>
                            </View>
                            <View>
                                <Text className = "font-semibold text-['#EBEBEB']">Good afternoon</Text>
                                <Text className = "text-[24px] font-bold text-white">{user.name}</Text>
                            </View>
                        </View>
                        <Pressable 
                            onPress = {() => router.push("../Features/Notification")}
                            className = "h-[50px]  w-[50px] bg-['#0A6342'] rounded-full border-1 border-['#13784F'] justify-center items-center" 
                            >
                            <Text>bell</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text className = "text-white text-xl">Left to spend this month</Text>
                        <Text className = "text-white text-[55px] font-semibold">{ user.spent.toLocaleString( "en-PH" ) }</Text>
                    </View>
                    <View className = "flex-col gap-2">
                        <View className = "bg-['#2A8A62'] h-3 max-w-full overflow-hidden rounded-full">
                            <View 
                                className = "h-full bg-white rounded-full"
                                style = {{ width: `${percent}%` }}
                                />
                        </View>
                        <View className = "flex-row justify-between">
                            <Text className = "text-white font-semibold">{ user.spent.toLocaleString( "en-PH" ) } of { user.budget.toLocaleString( "en-PH" ) }</Text>
                            <Text className = "text-white font-semibold">On track</Text>
                        </View>
                    </View>
                </View>
                <WhiteCardProps>
                    <View className = "flex-row gap-3">
                        <Pressable 
                            onPress = {() => router.push("../../Features/AddExpense")}
                            className = "flex-1 bg-black py-6 rounded-[20px]"
                        >
                            <Text className = "text-white text-xl font-bold text-center">Expense</Text>
                        </Pressable>
                        <Pressable 
                            onPress = {() => router.push("../../Features/AddIncome")}
                            className = "flex-1 bg-['#E7F5EE'] py-6 rounded-[20px]"
                        >
                            <Text className = "text-['#047857'] text-xl font-bold text-center">Income</Text>
                        </Pressable>
                    </View>
                    <View className = "bg-['#FFF1E8'] p-5 rounded-[20px]">
                        <Text className = "text-['#C2410C'] text-lg">Food & dining is <Text className = "font-bold">900 over </Text>budget</Text>
                    </View>
                </WhiteCardProps>
            </SafeAreaView>
        </GradientBackground>
    );
}

export default Dashboard;