import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';

export const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignUp = () => {
    const newUser = {
      name: username,
      email: email,
      password: password,
    };
    fetch('http://savvy.developerpro.co/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(() => navigation.goBack())
      .catch(err => alert(err.message));
  };

  return (
    <View style={styles.backgroundWrapper}>
      <ImageBackground
        source={images.LoginBg}
        resizeMode="cover"
        style={styles.WelcomeBg}>
        <View style={styles.loginBanner}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Username"
              placeholderTextColor="#003f5c"
              onChangeText={username => setUsername(username)}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Enter Email"
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
          <TouchableOpacity style={styles.loginBtn} onPress={onSignUp}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBottom}>
          <TouchableOpacity style={styles.loginGoogle}>
            <Image source={images.GoogleIcon} style={styles.loginGoogleIcon} />
            <Text style={styles.loginGoogleText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <View style={styles.loginAccountWrap}>
            <Text style={styles.loginAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={styles.loginAccount}
              onPress={() => navigation.navigate('login')}>
              <Text style={styles.loginAccountBtn}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
