import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar.jsx';
import useResult from '../hooks/useResult.jsx';
import ResultsList from '../components/ResultsList.jsx';


export default function SearchScreen() {
    const [searchApi, results] = useResult();
    console.log(results);
    const filterResultsByPrice = (price) => results.filter(result => result.price === price);
    return (
        <View>
            <SearchBar />
            <ResultsList title={'Cheapest Restaurant'} results={filterResultsByPrice('₺')} />
            <ResultsList title={'Suitable Restaurant'} results={filterResultsByPrice('₺₺')} />
            <ResultsList title={'Expensive Restaurant'} results={filterResultsByPrice('₺₺₺')} />
        </View>
    )
}

const styles = StyleSheet.create({})