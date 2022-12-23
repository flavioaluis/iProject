
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render () {
        return (
            
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}> iTUDE</Text>
                </View>    
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding:10,
        borderBottomWidth:1,
        borderColor: '#BBB'  
    },
    rowContainer: {
        flexDirection:'row',
        alignItems: 'center'
    },
    image:{
        marginTop:15,
        height: 30,
        width:20,
        resizeMode: 'contain'

    },
    title: {
        color: '#000',
        marginTop:15,
        height: 35,
        fontSize: 28
    }
})

export default Header