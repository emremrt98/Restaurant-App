import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    // container: {
    //     marginLeft: 15,
    // },

    image: {
        width: 250,
        height: 120,
        borderRadius: 6,
        marginBottom: 7,
    },
    name: {
        fontWeight: 'bold'
    }
})