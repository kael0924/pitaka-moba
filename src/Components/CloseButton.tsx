import { router } from "expo-router"
import { Pressable, Text } from "react-native"

type BackButtonProps = {
    onPress?: () => void;
}

function CloseButton ({onPress}: BackButtonProps) {
    return (
        <Pressable
            onPress = {onPress ?? (() => router.back())}
            className = "bg-['#0A6342'] h-[50px] w-[50px] rounded-full justify-center items-center" 
        >
            <Text className = "text-white">Close</Text>
        </Pressable>
    );
}

export default CloseButton;