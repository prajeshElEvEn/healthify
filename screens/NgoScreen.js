import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const NgoScreen = () => {
    const nav = useNavigation()

    useLayoutEffect(() => {
        nav.setOptions({
            headerShown: false,
        })
    }, [nav])
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.userInfo}>
                    <View style={styles.userPhoto}></View>
                    <Text style={styles.userName}>
                        @username
                    </Text>
                </View>
                <View style={styles.settingBtn}>
                    <Ionicons name="settings-sharp" size={28} color="#5e17eb" />
                </View>
            </View>
            <View style={styles.categoryBox}>
                <Text style={styles.screenTitle}>
                    Browse NGOs
                </Text>
            </View>
            <ScrollView style={styles.Container}>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                NGO
                            </Text>
                            <Text style={styles.subTitle}>
                                description
                            </Text>
                        </View>
                        <View style={styles.ngoInfo}>
                            <View style={styles.ngoPhone}>
                                <FontAwesome name="phone" size={24} color="black" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="black" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.menuBox}>
                <View style={styles.menu}>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="podcast" size={24} color="black" />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="blog" size={24} color="black" />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="disease" size={24} color="black" />
                    </View>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="alert-circle" size={24} color="black" />
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
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userPhoto: {
        height: 50,
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 50,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 6,
    },
    settingBtn: {
        padding: 10,
        backgroundColor: 'gray',
    },
    categories: {},
})

export default NgoScreen
