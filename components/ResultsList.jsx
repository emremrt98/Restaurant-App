import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

export default function ResultsList({ title, results }) {
    return (
        <View>
            <Text>{title}</Text>
            <FlatList data={results} renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})