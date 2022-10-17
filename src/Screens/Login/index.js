import React, {useState, useContext} from 'react';
import {AppState} from '../../context/AppContext';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginUser, isLoading} = useContext(AppState);

  const handleLogin = () => {
    const user = new FormData();
    user.append('email', email);
    user.append('password', password);
    loginUser(user, navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground
          source={images.LoginBg}
          resizeMode="cover"
          style={styles.WelcomeBg}>
          <View style={styles.loginBanner}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your email"
                placeholderTextColor="#003f5c"
                onChangeText={email => setEmail(email)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />
            </View>
            <View style={styles.forget}>
              <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginBottom}>
            <TouchableOpacity style={styles.loginGoogle}>
              <Image
                source={images.GoogleIcon}
                style={styles.loginGoogleIcon}
              />
              <Text style={styles.loginGoogleText}>Login with Google</Text>
            </TouchableOpacity>
            <View style={styles.loginAccountWrap}>
              <Text style={styles.loginAccountText}>
                Don’t have an account?
              </Text>
              <TouchableOpacity
                style={styles.loginAccount}
                onPress={() => navigation.navigate('signup')}>
                <Text style={styles.loginAccountBtn}>Sign Up here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <Spinner
          visible={isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
