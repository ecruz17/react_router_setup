import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class ArtistBox extends Component {
    render() {
        const { image, name } = this.props.artist;
        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.info}>
                    <Text style={styles.name} >
                        {name}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: white,
        flexDirection: true,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    }
});
