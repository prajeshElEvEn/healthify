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
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryName}>
                            Most Popular
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <ScrollView style={styles.blogContainer}>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.blogCard}>
                    <View style={styles.cardTop}></View>
                    <View style={styles.cardBottom}>
                        <View style={styles.cardText}>
                            <Text style={styles.title}>
                                Blog Title
                            </Text>
                            <Text style={styles.subTitle}>
                                Save the youth sum sum sum
                            </Text>
                        </View>
                        <View style={styles.authorInfo}>
                            <View style={styles.authorPhoto}></View>
                            <Text style={styles.authorName}>
                                @username
                            </Text>
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
    },
    cardTop: {
        height: 150,
        backgroundColor: 'gray',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
