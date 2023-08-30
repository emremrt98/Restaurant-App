import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Searchbar() {
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.iconWrapper}>
                <AntDesign style={styles.iconStyle} name="search1" size={24} color="black" />
            </View>
            <TextInput style={styles.inputStyle} placeholder="Search" autoCapitalize='none' autoComplete={'false'} />

        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#fff',
        margin: 10,
        position: 'relative',
        borderWidth: 1,
        borderColor: '#cfcfcf',
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',

    },
    inputStyle: {
        paddingHorizontal: 15,
        height: 48,
        width: '100%',
        flex: 1,
        fontSize: 16
    },
    iconWrapper: {
        paddingLeft: 15,
    },
    iconStyle: {
        fontSize: 20,
    },
})
