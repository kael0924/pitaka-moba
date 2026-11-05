import { View, Text, Button, Image } from 'react-native'
import { useRouter } from 'expo-router' 

function WelcomeScreen() {

    const router = useRouter()

    const handleGetStarted = () => {
        router.replace("/PinScreen")
    }

    return (
        <View className='' id=''>
            <View>
                <Text>Pitaka</Text>
                <Button onPress={()=>{}} title={'Skip'} />
            </View>
            <View className='content'>
                <View>
                    <Text>Take control of every Peso</Text>
                    <Text>Track Spending, set budgets and see where your money goes - all in one place.</Text>
                </View>
                <View>
                    <Image src={''}/>
                </View>
            </View>
            <View>
                <View>
                    <Button onPress={handleGetStarted} title={'Get Started'} />
                    <Button onPress={()=>{}} title={'->'} />
                </View>
                <View>
                    <Text>
                        Already have an account? Sign in
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen