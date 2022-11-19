import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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
            <ScrollView style={styles.ngoContainer}>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
                                <Text style={styles.ngoLocationText}>
                                    Delhi
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.ngoCard}>
                    <View style={styles.cardLeft}></View>
                    <View style={styles.cardRight}>
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
                                <FontAwesome name="phone" size={24} color="#5e17eb" />
                                <Text style={styles.ngoPhoneText}>
                                    1234567890
                                </Text>
                            </View>
                            <View style={styles.ngoLocation}>
                                <Ionicons name="location-sharp" size={24} color="#5e17eb" />
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
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Home')}
                    >
                        <FontAwesome5 name="podcast" size={32} color="#5e17eb" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Blog')}
                    >
                        <FontAwesome5 name="blog" size={32} color="#5e17eb" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Disease')}
                    >
                        <FontAwesome5 name="disease" size={32} color="#5e17eb" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Ngo')}
                    >
                        <MaterialCommunityIcons name="alert-circle" size={32} color="#5e17eb" />
                    </TouchableOpacity>
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
        paddingTop: 28,
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
        backgroundColor: '#e9deff',
        borderRadius: 10,
    },
    categoryBox: {
        marginTop: 60,
    },
    screenTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    categories: {
        marginVertical: 20,
    },
    category: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        // borderColor: '#e9deff',
        // borderWidth: 1,
        borderRadius: 50,
        marginRight: 8,
        backgroundColor: '#e9deff',
    },
    ngoContainer: {
        marginVertical: 20,
    },
    ngoCard: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    cardLeft: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardRight: {
        // marginLeft: 16,
        paddingHorizontal: 16,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: '#e9deff',
    },
    cardText: {
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
    },
    ngoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ngoPhone: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ngoPhoneText: {
        marginLeft: 6,
    },
    ngoLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ngoLocationText: {
        marginLeft: 6,
    },
    menuBox: {
        // position: 'absolute',
        // bottom: 18,
        // justifyContent: 'center',
        backgroundColor: '#e9deff',
        borderRadius: 10,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 28,
        paddingVertical: 20,
        // width: '80%',
    },
    menuItem: {},
})

export default NgoScreen
