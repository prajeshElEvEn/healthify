import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const NgoScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View>
            <Text>NgoScreen</Text>
        </View>
    )
}

export default NgoScreen
