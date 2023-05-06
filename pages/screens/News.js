import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons';

export default function News({navigation}) {

   

    const [data, setData] = useState([])

    const url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=26d8b1f6b42049d0814f5336a07f18d3"

    const getArticles = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticles();
    }, []);



  return (
    <>
   
    {
        Object.keys(data).length > 0 &&(
            
            <View style={styles.newsfeed}>
                <View>
                    
                    {
                        data.articles.map((article,index) => (
                            <Card key={index} style={styles.card}>
                                <View>
                                     <Image
                                        source={{uri:article.urlToImage}}
                                        style={{
                                            width: "100%",
                                            height: 150
                                        }}
                                    />
                                    <Text style={styles.title}>
                                        {article.title}
                                    </Text>
                                    
                                    <Text>
                                        {article.description}
                                    </Text>
                                    
                                </View>
                            </Card>
                        ))
                    }
                </View>
            </View>
        )
    }
    </>
  )
}

const styles = StyleSheet.create({
    card: {
        height: 300,
        backgroundColor: "#D9DFF1",
        width: "90%",
        marginStart: "5%",
        marginBottom: "5%",
        borderRadius: "15%"
    },
    news: {
        fontSize: 30,
        fontWeight: "500",
        marginStart: "5%"
    },
    newsfeed: {
        height: 500,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
    },
    
   
})