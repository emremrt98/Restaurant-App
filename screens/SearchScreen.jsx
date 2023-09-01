import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx';
import useResult from '../hooks/useResult.jsx';
import ResultsList from '../components/ResultsList.jsx';


export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResult();
    const [term, setTerm] = useState("")
    const filterResultsByPrice = (price) => results.filter(result => result.price === price);
    return (
        <ScrollView>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {
                errorMessage ? alert(errorMessage)
                    :

                    results.length == 0
                        ?
                        null
                        :
                        <>
                            <ResultsList title={'Cheapest Restaurant'} results={filterResultsByPrice('₺')} />
                            <ResultsList title={'Suitable Restaurant'} results={filterResultsByPrice('₺₺')} />
                            <ResultsList title={'Expensive Restaurant'} results={filterResultsByPrice('₺₺₺')} />
                        </>

            }


        </ScrollView>
    )
}

const styles = StyleSheet.create({})