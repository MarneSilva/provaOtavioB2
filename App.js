import {Text, View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import loginPage from './src/pages/loginPage/index.js';
import mainPage from './src/pages/mainPage/index.js';
import registerPage from './src/pages/registerPage/index.js';
import forgotPassword from './src/pages/forgotPassword/index.js';
import { Link } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    // Fiquei só 1 hr meia pra achar um erro de digitação :)
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='mainPage' component={mainPage} options={{headerShown: false}}/>
        <Stack.Screen name='loginPage' component={loginPage}/>
        <Stack.Screen name='registerPage' component={registerPage}/>
        <Stack.Screen name='forgotPassword' component={forgotPassword}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'column'
  }
});