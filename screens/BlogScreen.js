import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
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
                    <View style={styles.userPhoto}></View>
                    <Text style={styles.userName}>
                        @username
                    </Text>
                </View>
                <View style={styles.settingBtn}>
                    <AntDesign name="setting" size={28} color="#5e17eb" />
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
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="podcast" size={32} color="#5e17eb" />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="blog" size={32} color="#5e17eb" />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesome5 name="disease" size={32} color="#5e17eb" />
                    </View>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name="alert-circle" size={32} color="#5e17eb" />
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
    blogContainer: {},
    blogCard: {
        marginBottom: 16,
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
    },
    subTitle: {
        fontSize: 16,
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

export default BlogScreen
