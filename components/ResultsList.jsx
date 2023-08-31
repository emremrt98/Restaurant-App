import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

export default function ResultsList({ title, results }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginVertical: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})