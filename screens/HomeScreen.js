import { View, Text, StyleSheet, ScrollView, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const HomeScreen = () => {
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
                    {/* <View style={styles.userPhoto}></View> */}
                    <Image source={require('../assets/images/user.jpg')} style={styles.userPhoto} />
                    <Text style={styles.userName}>
                        @username
                    </Text>
                </View>
                <TouchableOpacity style={styles.settingBtn}>
                    <Ionicons name="settings-sharp" size={28} color="#BCC3CD" />
                </TouchableOpacity>
            </View>
            <View style={styles.categoryBox}>
                <Text style={styles.screenTitle}>
                    Podcasts
                </Text>
                <ScrollView
                    style={styles.categories}
                    horizontal={true}
                >
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Live
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Women Health
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Hygiene
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Covid 19
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Mental Health
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={styles.podcastContainer}>
                <TouchableOpacity style={styles.podcastCard}>
                    {/* <View style={styles.cardLeft}></View> */}
                    <Image source={require('../assets/images/ted.jpg')} style={styles.cardLeft} />
                    <View style={styles.cardRight}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                TED Health
                            </Text>
                            <Text style={styles.author}>
                                TED
                            </Text>
                            <Text style={styles.duration}>
                                44min 16sec
                            </Text>
                        </View>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={28} color="#8FCAFF" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podcastCard}>
                    {/* <View style={styles.cardLeft}></View> */}
                    <Image source={require('../assets/images/nutrition.jpeg')} style={styles.cardLeft} />
                    <View style={styles.cardRight}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Nutrition Secrets
                            </Text>
                            <Text style={styles.author}>
                                Red FM
                            </Text>
                            <Text style={styles.duration}>
                                4min 36sec
                            </Text>
                        </View>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={28} color="#8FCAFF" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podcastCard}>
                    {/* <View style={styles.cardLeft}></View> */}
                    <Image source={require('../assets/images/uk.jpeg')} style={styles.cardLeft} />
                    <View style={styles.cardRight}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                UK HealthCast
                            </Text>
                            <Text style={styles.author}>
                                UK HealthCare
                            </Text>
                            <Text style={styles.duration}>
                                4min 36sec
                            </Text>
                        </View>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={28} color="#8FCAFF" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podcastCard}>
                    {/* <View style={styles.cardLeft}></View> */}
                    <Image source={require('../assets/images/fit.jpeg')} style={styles.cardLeft} />
                    <View style={styles.cardRight}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Fit, Healthy & Happy
                            </Text>
                            <Text style={styles.author}>
                                Colossus Fitness
                            </Text>
                            <Text style={styles.duration}>
                                4min 36sec
                            </Text>
                        </View>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={28} color="#8FCAFF" />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.podcastCard}>
                    {/* <View style={styles.cardLeft}></View> */}
                    <Image source={require('../assets/images/health.jpeg')} style={styles.cardLeft} />
                    <View style={styles.cardRight}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Health Talk
                            </Text>
                            <Text style={styles.author}>
                                TriHealth
                            </Text>
                            <Text style={styles.duration}>
                                4min 36sec
                            </Text>
                        </View>
                        <View style={styles.playBtn}>
                            <FontAwesome5 name="play" size={28} color="#8FCAFF" />
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.menuBox}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Home')}
                    >
                        <FontAwesome5 name="podcast" size={32} color="#BCC3CD" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Blog')}
                    >
                        <FontAwesome5 name="blog" size={32} color="#BCC3CD" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Disease')}
                    >
                        <FontAwesome5 name="disease" size={32} color="#BCC3CD" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.menuItem}
                        onPress={() => nav.navigate('Ngo')}
                    >
                        <MaterialCommunityIcons name="alert-circle" size={32} color="#BCC3CD" />
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
        backgroundColor: '#14191F',
        // color: '#fff'
    },
    navbar: {
        color: '#fff',
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
        marginLeft: 10,
        color: '#BCC3CD',
    },
    settingBtn: {
        padding: 10,
        backgroundColor: '#1C2026',
        borderRadius: 10,
        borderColor: '#3d3d3d',
        borderWidth: 1,
    },
    categoryBox: {
        marginTop: 60,
    },
    screenTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#BCC3CD',
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
        backgroundColor: '#122447',
        borderColor: '#1c448e',
        borderWidth: 1,
    },
    categoryName: {
        color: '#BCC3CD',
        fontSize: 16,
    },
    podcastContainer: {
        marginBottom: 20,
    },
    podcastCard: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#1C2026',
        borderRadius: 10,
        borderColor: '#3d3d3d',
        borderWidth: 1,
    },
    cardLeft: {
        height: 120,
        width: 120,
        backgroundColor: 'gray',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '70%',
        flex: 1,
        marginHorizontal: 16,
        // backgroundColor: '#e9deff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#BCC3CD',
    },
    author: {
        fontSize: 18,
        color: '#BCC3CD',
    },
    duration: {
        fontSize: 16,
        color: '#BCC3CD',
    },
    playBtn: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: '#122447',
        borderColor: '#1c448e',
        borderWidth: 1,
        borderRadius: 50,
    },
    menuBox: {
        // position: 'absolute',
        // bottom: 18,
        // justifyContent: 'center',
        backgroundColor: '#1C2026',
        borderRadius: 10,
        borderColor: '#3d3d3d',
        borderWidth: 1,
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

export default HomeScreen
