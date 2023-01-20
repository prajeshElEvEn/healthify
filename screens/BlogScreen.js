import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BlogScreen = () => {
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
                    {/* <View style={styles.userPhoto}></View>
                     */}
                    <Image source={require('../assets/images/user.jpg')} style={styles.userPhoto} />
                    <Text style={styles.userName}>
                        @username
                    </Text>
                </View>
                <View style={styles.settingBtn}>
                    <Ionicons name="settings-sharp" size={28} color="#BCC3CD" />
                </View>
            </View>
            <View style={styles.categoryBox}>
                <Text style={styles.screenTitle}>
                    Blogs
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
            <ScrollView style={styles.blogContainer}>
                <TouchableOpacity style={styles.blogCard}>
                    {/* <View style={styles.cardTop}></View> */}
                    <Image source={require('../assets/images/blog1.jpg')} style={styles.cardTop} />
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Some Legit Ways To Save Money On Prescription Medications
                            </Text>
                            <Text style={styles.subTitle}>
                                It’s no secret that prescription medications can be expensive and can even be prohibitively costly for certain segments of society. Fortunately, there are many…
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            {/* <View style={styles.authorPhoto}></View> */}
                            <Image source={require('../assets/images/blog-user.jpg')} style={styles.authorPhoto} />
                            <Text style={styles.authorName}>
                                George Hanks
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blogCard}>
                    {/* <View style={styles.cardTop}></View> */}
                    <Image source={require('../assets/images/blog2.jpg')} style={styles.cardTop} />
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                You Should Follow These Tips To Achieve A Healthy Weight
                            </Text>
                            <Text style={styles.subTitle}>
                                Most people would like to be a healthy weight, whatever that means for their body type. Unfortunately, not many people know how to achieve…
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            {/* <View style={styles.authorPhoto}></View> */}
                            <Image source={require('../assets/images/blog-user.jpg')} style={styles.authorPhoto} />
                            <Text style={styles.authorName}>
                                Mark Stevens
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blogCard}>
                    {/* <View style={styles.cardTop}></View> */}
                    <Image source={require('../assets/images/blog3.jpg')} style={styles.cardTop} />
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Dieting With Weight Loss Shakes? Here’s How To Do It Right
                            </Text>
                            <Text style={styles.subTitle}>
                                When it comes to dieting, there are many different ways you can go about it. Some people choose to cut out certain foods altogether,…
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            {/* <View style={styles.authorPhoto}></View> */}
                            <Image source={require('../assets/images/blog-user.jpg')} style={styles.authorPhoto} />
                            <Text style={styles.authorName}>
                                Rachel Purton
                            </Text>
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
    blogContainer: {
        marginBottom: 16,
    },
    blogCard: {
        marginBottom: 16,
        backgroundColor: '#1C2026',
        borderRadius: 10,
        borderColor: '#3d3d3d',
        borderWidth: 1,
        flex: 1,
    },
    cardTop: {
        height: 200,
        width: '100%',
        backgroundColor: 'gray',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    cardBottom: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    cardText: {
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#BCC3CD',
    },
    subTitle: {
        fontSize: 16,
        color: '#BCC3CD',
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    authorPhoto: {
        height: 40,
        width: 40,
        backgroundColor: 'gray',
        borderRadius: 50,
    },
    authorName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 6,
        color: '#BCC3CD',
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

export default BlogScreen
