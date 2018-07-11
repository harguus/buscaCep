
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../src/img/logo3.png';

export default class Home extends Component<Props> {

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
          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => Actions.porcep()}>
              <Text style={styles.botaoNome}>Pesquisar por CEP</Text>
            </TouchableOpacity>
            {/*<TouchableOpacity
              style={styles.botao}
              onPress={() => Actions.porrua()}>
              <Text style={styles.botaoNome}>Pesquisar por RUA</Text>
            </TouchableOpacity>*/}
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
  meio: {
    flex: 2,
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 25
  },
  botao: {
    backgroundColor: "#6A9EE8",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    alignItems: 'center',
    padding: 15,
    marginTop: 20
  },
  botaoNome: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
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
