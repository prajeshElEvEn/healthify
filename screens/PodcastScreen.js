import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const PodcastScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </View>
            </View>
            <View style={styles.playerCard}>
                <View style={styles.playerCardTop}></View>
                <View style={styles.playerCardBottom}>
                    <Text style={styles.title}>
                        Title
                    </Text>
                    <Text style={styles.ngoName}>
                        NGO
                    </Text>
                    <View style={styles.player}>
                        <Text style={styles.timer}>
                            00:00
                        </Text>

                        <Text style={styles.timer}>
                            04:00
                        </Text>
                    </View>
                    <View style={styles.controls}>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={24} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
        height: '100%',
    },
})

export default PodcastScreen
