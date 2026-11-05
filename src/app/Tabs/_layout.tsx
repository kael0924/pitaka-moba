import Ionicons from '@react-native-vector-icons/ionicons'
import { Tabs } from "expo-router"
import { View } from "react-native"

function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false, 
                tabBarActiveTintColor: "#0A6342",
                tabBarInactiveTintColor: "gray", 
                tabBarStyle: {
                    position: "absolute",
                    marginHorizontal: 20,
                    marginVertical: 30,
                    elevation: 0,
                    borderRadius: 50,
                    paddingTop: 9,
                    borderWidth: 1,
                },
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false, tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={20} color={color} />
            ),}} />
            <Tabs.Screen name="Activity" options={{ title: "Activity", headerShown: false, tabBarIcon: ({ color, size }) => (
                <Ionicons name="list-circle" size={25} color={color} />
            ),}} />
            <Tabs.Screen name="AddExpense" options={{ tabBarLabel: ()=> null, headerShown: false, tabBarIcon: ({ color, size }) => (
                <View style={{width: 100, height: 100, borderRadius: 30, justifyContent: 'center', alignItems: 'center'}}><Ionicons name="add-circle" size={90} color="#0A6342" /></View>
            ), }} />
            <Tabs.Screen name="Budget" options={{ title: "Budget", headerShown: false, tabBarIcon: ({ color, size }) => (
                <Ionicons name="card" size={20} color={color} />
            ), }} />
            <Tabs.Screen name="Settings" options={{ title: "Settings", headerShown: false, tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" size={20} color={color} />
            ), }} />
        </Tabs>
    );
}

export default TabsLayout;