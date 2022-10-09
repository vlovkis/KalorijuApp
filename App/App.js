import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import SignInScreen from '../src/screens/SignInScreen';
import CustomInput from '../src/components/CustomInput';
import SignUpScreen from '../src/screens/SignUpScreen';
import ConfirmEmailScreen from '../src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../src/screens/ResetPasswordScreen';
import Navigation from '../src/Navigation';
import 'react-native-gesture-handler';
export default function App() {
  return (
    //<View style={styles.container}>
      <Navigation style={styles.container}/>
      //<StatusBar style="auto" />
    //</View>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
