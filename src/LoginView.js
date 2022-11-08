import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default class LoginView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Emir'
        }
    }

    getLogin = () => {
        console.log('Router test native');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.getLogin()}
                    title='Login'
                    color='#aaee45'
                    accessibilityLabel='Login button'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});