import { View, Text, Pressable } from "react-native"
import { router } from "expo-router"
import CloseButton from "./CloseButton"
import BackButton from "./BackButton"

type HeaderScreenProps = {
    title: string;
    variant?: "close" | "back";
};

function HeaderScreen ({title, variant = "back"}: HeaderScreenProps) {
    if (variant === "close") {
        return (
            <View className="flex-row p-5 justify-between items-center"> 
                <CloseButton/>
                <Text className="text-white font-bold text-xl">{title}</Text>
                <View className="h-[50px] w-[50px]"></View>
            </View>
        );
    }
    return (
        <View className="flex-row p-5 justify-between items-center">
            <BackButton/>
            <Text className="text-white font-bold text-xl">{title}</Text>
            <View className="h-[50px] w-[50px]"></View>
        </View>
    );
}

export default HeaderScreen;