import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router, Scene, Modal} from 'react-native-router-flux';
import Home from './views/Home';
import PorCep from './views/PorCep';
import PorRua from './views/PorRua';
import Sobre from './views/Sobre';

export default class App extends Component<Props> {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: '#1E2D42' }} titleStyle={{ color: "#fff" }}>
          <Modal>
              <Scene hideNavBar={true} key='home' component={Home}/>
              <Scene headerTintColor='#fff' key="porcep" component={PorCep} title="Busca por CEP"/>
              <Scene headerTintColor='#fff' key="porrua" component={PorRua} title="Busca Por Rua"/>
              <Scene headerTintColor='#fff' key="sobre" component={Sobre} title="Sobre a aplicação"/>
          </Modal>
        </Router>
    );
  }
}
