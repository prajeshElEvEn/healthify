import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const BlogScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View>
            <Text>BlogScreen</Text>
        </View>
    )
}

export default BlogScreen
