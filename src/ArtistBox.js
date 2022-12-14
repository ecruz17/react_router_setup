import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ArtistBox extends Component {
    render() {
        const { name } = this.props.artist
        const image = 'https://static.wikia.nocookie.net/shrek/images/5/56/Humpty_Dumpty.png/revision/latest/top-crop/width/360/height/450?cb=20111130083330';
        return (
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{ uri: image }} />
                <View style={styles.info}>
                    <Text style={styles.name}>
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
        backgroundColor: 'white',
        flexDirection: 'row',
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
})
