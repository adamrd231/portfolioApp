import React from 'react';
import { AppRegistry, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.photoGrid}>
        
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/cRyan.png')} />
            </View>
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/BB.png')} />
            </View>
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/Rihanna.png')} />
            </View>
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/mm.png')} />
            </View>
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/nike.png')} />
            </View>
            <View style={styles.photoWrap}>
                <Image style={styles.photo} source={require('../img/molly.png')} />
            </View>
                                                    
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',        
    },
    photoWrap: {
        margin: 2,
        height: 250,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }
});
