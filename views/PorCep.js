
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Preloading from '../components/Preloading';
import CrossButtom from '../components/CrossButtom';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Logo from '../src/img/logo3.png';

export default class PorCep extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      cep: "",
      resultado: [],
      loaded: false,
      preloaded: false,
    }
  }

  buscarPorCep() {
    Keyboard.dismiss();
    if (this.state.cep != "") {
      this.setState({preloaded: true});
      axios.get('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      .then((response) => {
          this.setState({ resultado: response.data });
          this.setState({ loaded: true, preloaded: false });
        })
        .catch((error) => {
          console.log(error);
          ToastAndroid.showWithGravity(
            'Problema com a conexão: ' + error.response.status, ToastAndroid.SHORT, ToastAndroid.CENTER
          );
          this.setState({ loaded: true });
        });
      } else{
        ToastAndroid.showWithGravity("Digite o CEP", ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
  }

  render() {
    return (
      <View style={styles.geral}>
        <View style={styles.topo}>
          <Image
            style={{ width: 100, height: 100, marginTop: 15 }}
            source={Logo}
          />
        </View>
        <View style={styles.meio}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textDica}>Digite o CEP</Text>
          </View>
          <View style={styles.meioInputs}>
            <TextInput
              style={styles.inputText}
              keyboardType='numeric'
              maxLength={8}
              onChangeText={(text) => { this.setState({ cep: text }) }}
            />
            <TouchableOpacity
              style={styles.botao}
              onPress={() => this.buscarPorCep()}
            >
              <Text style={styles.botaoNome}>Pesquisar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultado}>
            { 
              this.state.preloaded ?
              <Preloading/> :
              this.state.loaded ?
                <View style={styles.viewResultado}>
                  <View style={{flex: 2}}>
                    <Text>Rua: {this.state.resultado.logradouro}</Text>
                    <Text>Bairro: {this.state.resultado.bairro}</Text>
                    <Text>Cidade: {this.state.resultado.localidade}</Text>
                    <Text>Estado: {this.state.resultado.uf}</Text>
                  </View>
                  <View style={{ flex: 1, paddingTop: 10, justifyContent: 'center', alignContent: 'center', }}>
                    <CrossButtom/>
                  </View>
                </View>
                : <View></View>
            }
          </View>
        </View>
        <View style={styles.rodape}>
          <TouchableOpacity onPress={() => Actions.sobre()}>
            <Text style={styles.sobre}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: "#A5D4D9"
  },
  topo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 40,
    marginTop: 15,
    paddingLeft: 10,
    width: 180,
  },
  meio: {
    flex: 2,
    marginLeft: 25,
    marginRight: 25,
  },
  textDica:{
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
  },
  meioInputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  resultado: {
    flex: 4,
    marginTop: 15,
  },
  viewResultado: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: "#6A9EE8",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    padding: 10,
    marginTop: 15
  },
  botaoNome: {
    color: "#fff"
  },
  rodape: {
    flex: .25,
    backgroundColor: '#1E2D42',
    alignItems: 'center',
  },
  sobre: {
    marginTop: 15,
    color: "#fff"
  }
});
