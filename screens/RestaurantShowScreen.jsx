import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function RestaurantShowScreen({ route }) {
    const [result, setResult] = useState(null);

    const id = route.params.id;
    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {

        getResult(id);

    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.icons}>
                {
                    result.is_closed ? <AntDesign name="closecircleo" size={30} color="black" /> : <MaterialIcons name="motorcycle" size={30} color="black" />
                }
            </View>
            <FlatList
                data={result.photos}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        margin: 10,
        borderRadius: 6,
        height: 180
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10
    },
    phone: {
        alignSelf: 'center',
        fontSize: 20,
    },
    icons:{
        alignSelf: 'center',
    }
})