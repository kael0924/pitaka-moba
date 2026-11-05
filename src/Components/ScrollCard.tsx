import { ReactNode } from "react"
import { ScrollView } from "react-native"

type ScrollCardProps = {
    children: ReactNode;
};

function ScrollCardProps ({children}: ScrollCardProps) {
    return (
        <ScrollView>
            {children}
        </ScrollView>
    );
}

export default ScrollCardProps;