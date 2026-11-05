import { View } from "react-native"
import { ReactNode } from "react"

type WhiteCardProps = {
    children?: ReactNode;
    className?: string;
};

function WhiteCardProps ({children, className = " "}: WhiteCardProps) {
    return (
        <View className="bg-['#F4F5F7'] h-full relative rounded-t-[32px] p-4 flex-col gap-5 mt-0">
            {children}
        </View>
    );
}

export default WhiteCardProps;