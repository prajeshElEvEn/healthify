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
                    <AntDesign name="setting" size={24} color="black" />
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

export default BlogScreen
