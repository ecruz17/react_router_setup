import { View, StyleSheet, ActivityIndicator, Text } from "react-native";
import React, { Component } from "react";
import ArtistList from "./ArtistList";
import { getMusicData, URL } from "./api-client";
import { axiosInstance } from "./axios-client";
import ArtistBox from "./ArtistBox";

export default class HomeView extends Component {
    state = {
        artists: null,
        isLoading: true,
    };

    showLoading = () => {
        <ActivityIndicator size={"large"} />;
    };

    getArtists = () => {
        axiosInstance()
            .then((response) => {
                this.setState({ artists: response.data['artists'] });
                this.setState({ isLoading: false });
            })
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.getArtists();
        // getMusicData().then((data) => this.setState({ artists: data }))
    }

    render() {
        const artists = this.state.artists;
        console.log('estado');
        console.log(this.state.artists);
        console.log('loading');
        console.log(this.state.isLoading);
        return (
            <View style={styles.container}>
                {/* {this.state.isLoading ? <ActivityIndicator size={"large"} /> :
                    // <ArtistList
                    //     artists={artists}
                    // />
                    
                    // <Text> Lista de artistas </Text>
                } */}
                {artists.map((artist) => {
                    console.log(artist);
                    // const {name} = artist;
                    // <ArtistBox
                    //     name={name}
                    // />
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
        justifyContent: 'center',
        alignItems: 'center'
    },
});
