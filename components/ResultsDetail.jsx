import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={result.image_url ? { uri: result.image_url } : null} />
                <Text style={styles.rating}>{result.rating}/5</Text>
            </View>
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 6,
        marginBottom: 7,
    },
    name: {
        fontWeight: 'bold'
    },
    rating: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#ffd43b',
        borderBottomLeftRadius: 6,
        padding: 5,
        fontWeight: 'bold',
        color: '#343a40',
        textAlign: 'center'
    }
})