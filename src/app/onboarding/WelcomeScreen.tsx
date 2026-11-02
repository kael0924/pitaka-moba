import React from 'react'
import { View, Text, Button, Image } from 'react-native'

function WelcomeScreen() {
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
                    <Button onPress={()=>{}} title={'Get Started'} />
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