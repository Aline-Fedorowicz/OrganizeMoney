import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

export default function Cashback({ data }) {


    return (

        <TouchableOpacity style={styles.container}>

            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>

                <AntDesign name="shoppingcart" size={27} color="#DADADA" />






            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',


    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },

    date: {

        fontWeight: 'bold'
    },

    label: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#DADADA',
        marginTop: 7
    },

    value: {
        fontSize: 16,
        color: '#89ca41',
        fontWeight: 'bold'
    },

    expenses: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8,
    }
})