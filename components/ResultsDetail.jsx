import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultsDetail({ result }) {
    return (
        <View>
            <Image
                style={{ width: 250, height: !20 }}
                source={result.image_url && { uri: result.image_url }} />
            <Text>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Değerlendirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({})