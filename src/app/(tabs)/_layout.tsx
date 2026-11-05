import { Tabs } from "expo-router"

function TabsLayout() {
    console.log('[debug] TabsLayout mounted') // [debug]
    return (
        <Tabs
            screenOptions={{
                headerShown: false, 
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "blue", 
                tabBarStyle: {
                    position: "absolute",
                    marginHorizontal: 20,
                    marginVertical: 30,
                    elevation: 0,
                    borderRadius: 50,
                    borderWidth: 1,
                },
            }}
        >
            <Tabs.Screen name="index" options={{ title: "Home", headerShown: false }} />
            <Tabs.Screen name="Activity" options={{ title: "Activity", headerShown: false }} />
            <Tabs.Screen name="Budget" options={{ title: "Budget", headerShown: false }} />
            <Tabs.Screen name="Settings" options={{ title: "Settings", headerShown: false }} />
        </Tabs>
    );
}

export default TabsLayout;