import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'
export default function ResultsList({ title, results }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate("RestaurantShow", {id: item.id}) }>
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
        marginBottom: 7
    }
})