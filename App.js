import React, { Component } from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import ArtistDetailView from './src/ArtistDetailView';
import { Router, Actions, Scene } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='login' component={LoginView} hideNavBar />
    <Scene key='home' component={HomeView} hideNavBar />
    <Scene key='artistDetail' component={ArtistDetailView} title='Detalles de artista' hideNavBar={false} />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}