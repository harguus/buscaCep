
import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, Text, Image, View, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Pino from '../src/img/pino.png';

export default class Home extends Component<Props> {
  constructor(props){
    super(props);

    this.state = {
      cep: "",
      nomeRua: ""
    }
  }

  render() {
    return(
      <View style={styles.geral}>
        <View style={styles.topo}>
          <Image
            style={{width: 100, height: 100}}
            source={Pino}
          />
          <Text>
            Street Name
          </Text>
        </View>
        <View style={styles.meio}>
          <View style={styles.meioInputs}>
            <TextInput
              style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
              keyboardType='numeric'
              onChangeText={(text) => {this.setState({cep : text})}}
            />
          </View>
          <View style={styles.meioBotões}>
            <View style={styles.botoes}>
              <Button
                onPress={() => {Actions.porcep({cep : this.state.cep})}}
                title="Por CEP"
                accessibilityLabel="Fazer busca por CEP"
              />
              <Button
                onPress={() => {this.onPressLearnMore()}}
                title="Por Rua"
                accessibilityLabel="Fazer busca por nome da Rua"
              />
            </View>
          </View>
        </View>
        <View style={styles.rodape}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral:{
    flex: 1
  },
  topo:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meio:{
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  meioInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  meioBotões: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  botoes: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rodape:{
    flex: 1,
    backgroundColor: 'pink'
  }
});
