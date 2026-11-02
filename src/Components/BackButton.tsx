import { router } from "expo-router"
import { Pressable, Text } from "react-native"

type BackButtonProps = {
    onPress?: () => void;
}

function BackButton ({onPress}: BackButtonProps) {
    return (
        <Pressable 
            onPress = {onPress ?? (() => router.back())}
            className = "bg-['#0A6342'] h-[50px] w-[50px] rounded-full justify-center items-center" 
        >
            <Text className = "text-white">Back</Text>
        </Pressable>
    );
}

export default BackButton;