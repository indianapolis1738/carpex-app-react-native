import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function News() {

    const [isLoading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    const url = 'https://api.coinstats.app/public/v1/news?skip=0&limit=10'

    useEffect (()=> {
        fetch(url) 
        .then((response)=>response.json())
        .then((json)=> setData(json))
        .catch((error)=>console.error(error))
        .finally(setLoading(false))
      }, [])


  return (
    <SafeAreaView>
        <View>
            {
                isLoading ?
                <Text>
                    Loading
                </Text> :
                (
                    data.map((news) => (
                        <View key={news.id}>
                            <Text>
                                {news.title}
                            </Text>
                        </View>
                    ))
                )
            }
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})