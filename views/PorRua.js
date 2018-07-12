
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Preloading from '../components/Preloading';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Logo from '../src/img/logo3.png';

export default class PorRua extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeRua: "",
      resultado: [],
      loaded: false,
      preloaded: false,
    }
  }

  buscarPorCep() {
    Keyboard.dismiss();
    axios.get('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      .then((response) => {
        this.setState({ resultado: response.data });
        this.setState({ loaded: true });
      })
      .catch((error) => {
        console.log(error);
        ToastAndroid.showWithGravity(
          'Problema com a conexão: ' + error.response.status, ToastAndroid.SHORT, ToastAndroid.CENTER
        );
        this.setState({ loaded: true });
      });
  }

  render() {
    return (
      <View style={styles.geral}>
        <View style={styles.topo}>
          <Image
            style={{ width: 100, height: 100, marginTop: 20 }}
            source={Logo}
          />
          <Text style={styles.nomeLogo}>
            Busca CEP
          </Text>
        </View>
        <View style={styles.meio}>
          <View style={styles.meioInputs}>
            <TextInput
              style={styles.inputText}
              keyboardType='numeric'
              onChangeText={(text) => { this.setState({ cep: text }) }}
            />
            <TouchableOpacity
              style={styles.botao}
              onPress={() => this.buscarPorCep()}
            >
              <Text style={styles.botaoNome}>Por CEP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.meioInputs}>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => { this.setState({ nomeRua: text }) }}
            />
            <TouchableOpacity
              style={styles.botao}
              onPress={() => Actions.porcep({ cep: this.state.nomeRua })}
            >
              <Text style={styles.botaoNome}>Por Rua</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resultado}>
            {
              this.state.preloaded ?
                <Preloading /> :
              this.state.loaded ?
                <View style={styles.viewResultado}>
                  <Text>Rua: {this.state.resultado.logradouro}</Text>
                  <Text>Bairro: {this.state.resultado.bairro}</Text>
                  <Text>Cidade: {this.state.resultado.localidade}</Text>
                  <Text>Estado: {this.state.resultado.uf}</Text>
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
  nomeLogo: {
    marginTop: 15,
    color: "#fff",
    fontSize: 25,
  },
  inputText: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    height: 40,
    marginTop: 15,
    paddingLeft: 10,
    width: 150,
  },
  meio: {
    flex: 2,
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
  resultado: {
    flex: 4,
    marginTop: 15,
  },
  viewResultado: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    padding: 10,
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
