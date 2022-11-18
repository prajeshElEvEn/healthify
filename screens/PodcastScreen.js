import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const PodcastScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View>
            <Text>PodcastScreen</Text>
        </View>
    )
}

export default PodcastScreen
