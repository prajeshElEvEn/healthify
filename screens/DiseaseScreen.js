import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const DiseaseScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View>
            <Text>DiseaseScreen</Text>
        </View>
    )
}

export default DiseaseScreen
