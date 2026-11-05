import { Stack } from "expo-router"
import "../styles/global.css"

function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}

export default RootLayout;  