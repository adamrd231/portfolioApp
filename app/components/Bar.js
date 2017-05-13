import React from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class Bar extends React.Component {
  render() {
    return (
        <View style={styles.bar}>
        
            <View style={[styles.barItem, styles.barseperator]}>
                <Text style={styles.barTop}>Digital Designer</Text>
                <Text style={styles.barBottom}>Available for hire</Text>
            </View>
        
            <View style={styles.barItem}>
                <Text style={styles.barTop}>Contact</Text>
                <Text style={styles.barBottom}>adam.rdconcepts@gmail.com</Text>
            </View>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        backgroundColor: '#333333',
        flexDirection: 'row'
    },
    barseperator: {

        
    },
    barItem: {
        flex:1,
        padding: 18,
        alignItems: 'center',
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    barBottom: {
        color: '#888',
        fontSize: 14,
        fontWeight: 'bold',
    }
});
