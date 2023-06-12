import Troca from '../../components/trocaCartao';
import styles from './style';
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Link } from "@react-navigation/native";

export default function mainPage() {
    const listaItens = [
        {
          nome: 'Cutelo Negro',
          descricao: 'Um machado, que no caso, é negro.',
          imagem: 'https://www.highgroundgaming.com/wp-content/uploads/2021/06/Black-Cleaver.jpg'
        },
        {
          nome: 'Death Dance',
          descricao: 'A dança da morte.',
          imagem: 'https://leagueofitems.com/images/items/256/6333.webp'
        },
        {
          nome: "Warmog's Armor",
          descricao: 'A armadura de Warmog.',
          imagem: 'https://pbs.twimg.com/media/E4-p9h-WEAcvt_u.jpg'
        }
      ]
      return (
        <View style={styles1.container1}>
          {listaItens.map(t => <Troca troca={t}/>)}
          <View style={styles.linkViews}>
            <TouchableOpacity style={styles.button}>
                <Link style={styles.link} to={{screen: 'loginPage'}}>
                    Logue já!
                </Link>
                <Link style={styles.link} to={{screen: 'registerPage'}}>
                    Cadastre-se já!
                </Link>
                <Link style={styles.link} to={{screen: 'forgotPassword'}}>
                    Esqueceu a senha?
                </Link>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    const styles1 = StyleSheet.create({
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        flexDirection: 'column'
      }
    });