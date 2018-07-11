import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    ScrollView,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PorRua extends Component {
    render() {
        return (
            <View style={styles.geral}>
                <Text style={styles.h1}>Desenvolvido por:</Text>
                <Text style={styles.desc}>Thiago Cristiano Tavares</Text>
                <Text style={styles.desc}>https://github.com/harguus</Text>
                <Text style={styles.h1}>Sobre os dados:</Text>
                <Text style={styles.desc}>
                    Os dados são obititos de um banco de dados público através de uma API pública chamada ViaCEP
                </Text>
                <Text style={styles.desc}>https://viacep.com.br</Text>


                <Text style={styles.h1}>Imagens e ícones usado:</Text>
                <Text style={styles.desc}>Autor: Clayton Johnson</Text>
                <Text style={styles.desc}>https://www.iconfinder.com/thehoth</Text>
                <Text style={styles.desc}>Licence: Creative Commons (Attribution 3.0 Unported)</Text>
                <Text style={styles.desc}>https://creativecommons.org/licenses/by/3.0/</Text>

                <Text style={styles.desc}>Ícone usado:</Text>
                <Text style={styles.desc}>https://www.iconfinder.com/icons/353834/google_local_local_seo_maps_icon</Text>
                <Text style={styles.desc}>Ícone set:</Text>
                <Text style={styles.desc}>https://www.iconfinder.com/iconsets/seo-internet-marketing-flat-icons</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    geral: {padding: 15},
    h1: { fontWeight: 'bold', fontSize: 18, marginBottom: 5, },
    desc: { marginLeft: 10, fontSize: 15, marginBottom: 5}
});