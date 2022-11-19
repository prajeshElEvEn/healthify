import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const DiseaseScreen = () => {
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
                    Diseases
                </Text>
            </View>
            <View style={styles.symptomsContainer}>
                <View style={styles.symptomsBox}>
                    <Text style={styles.sympTitle}>
                        Symptoms
                    </Text>
                    <View style={styles.symptoms}>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>itch</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>Headache</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                        <View style={styles.symptom}>
                            <Text style={styles.sympText}>cough</Text>
                            <View style={styles.crossBtn}>
                                <Entypo name="cross" size={24} color="#5e17eb" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput style={styles.input} placeholder='type your symptom'></TextInput>
                        <View style={styles.addBtn}>
                            <Text style={styles.addBtnText}>
                                Add
                            </Text>
                        </View>
                    </View>
                    <View style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>
                            Submit
                        </Text>
                    </View>
                </View>
            </View>
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
    symptomsContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e9deff',
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
    },
    symptomsBox: {
    },
    sympTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    symptoms: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        // flex: 1,
        // minHeight: 100,
        // paddingVertical: 10,
    },
    symptom: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9deff',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 50,
        marginRight: 12,
        marginBottom: 12,
    },
    sympText: {
        fontSize: 18,
    },
    crossBtn: {
        marginLeft: 8,
    },
    inputBox: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#e9deff',
    },
    input: {
        flex: 1,
        fontSize: 18,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginRight: 12,
    },
    addBtn: {
        backgroundColor: '#5e17eb',
        borderRadius: 10,
        paddingHorizontal: 52,
        paddingVertical: 16,
    },
    addBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitBtn: {
        backgroundColor: '#5e17eb',
        borderRadius: 10,
        // paddingHorizontal: 52,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    submitBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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

export default DiseaseScreen
