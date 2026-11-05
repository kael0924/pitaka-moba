import Ionicons from '@expo/vector-icons/Ionicons'
import { router } from "expo-router"
import { Pressable } from "react-native"

type BackButtonProps = {
    onPress?: ()=> void;
}

function BackButton ({onPress}: BackButtonProps) {
    return (
        <Pressable 
            onPress={onPress ?? (() => router.back())}
            className="bg-['#0A6342'] h-[50px] w-[50px] rounded-full justify-center items-center" 
        >
            <Ionicons name="chevron-back" size={25} color="white" />
        </Pressable>
    );
}

export default BackButton;