import React, { Component } from 'react'
import Header from './src/components/Header'
import { View, Text, StyleSheet } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
        render () {
            const  comments = [{
                nickname: 'Lindsay Gabrielly: ',
                comment: 'Excelente ficou lindo.'
            }, {
                nickname: 'Elias Menon: ',
                comment: 'Muito bacana!'
            }, {
                nickname:'Isamara: ',
                comment:'Muito lindo, parabéns!'
            }]


            return (
                <View style={{ flex:1 }}>
                    <Header />
                    <Post image= { require('./assets/imgs/fence.jpg')} comments={comments} />
                </View>
            )
    }
}