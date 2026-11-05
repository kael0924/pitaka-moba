import { LinearGradient } from "expo-linear-gradient"
import { ReactNode } from "react"
import { StyleSheet} from "react-native"

type Props = {
    children?: ReactNode;
    colors?: [string, string, ...string[]];
};

function GradientBackground ({
    children,
    colors=["#053A28", "#0B7A4F"],
}: Props) {
    return (
        <LinearGradient
        colors={colors}
        start={{ x: 1, y: 0 }}  
        end={{ x: 1, y: 1 }}
        style={styles.container}
        >
            {children}
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default GradientBackground;