import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    ActivityIndicator,
    StyleSheet,
    Alert
} from 'react-native';
import Preloading from '../components/Preloading';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export default class PorCep extends Component{

  constructor(props){
    super(props);

    this.state = {
      loaded: false,
      resultado: [],
    }
   }

   componentDidMount() {
      // requisição HTTP
      axios.get('https://viacep.com.br/ws/'+ this.props.cep +'/json/')
          .then((response) => {
              this.setState({resultado: response.data});
              this.setState({loaded: true});
          })
          .catch((error) => {
              console.log(error);
              Alert.alert(
                  'Problema com a conexão: '+ error.response.status
              );
              this.setState({loaded: true});
          });
    }

    render(){
        return(
          <View>
          { this.state.loaded ?
            <View>
              <Text>
                Rua: {this.state.resultado.logradouro}
              </Text>
              <Text>
                Bairro: {this.state.resultado.bairro}
              </Text>
              <Text>
                Cidade: {this.state.resultado.localidade}
              </Text>
              <Text>
                Estado: {this.state.resultado.uf}
              </Text>
            </View>
          :
          <Preloading/>
          }
          </View>
        );
    }
}
