import React, {useState, useEffect} from 'react';
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

export const Success = ({navigation}) => {
  const [goback, setGoback] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setGoback(navigation.goBack()), 330);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.backgroundWrapper}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.ArrowBack} style={styles.backBtnImg} />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={images.SuccessBg}
        resizeMode="cover"
        style={styles.successBg}>
        <View style={styles.successBanner}>
          <View style={styles.successIcon}>
            <Image source={images.TrueIcon} style={styles.trueIcon} />
          </View>
          <View style={styles.successHead}>
            <Text style={styles.successHeading}>Success</Text>
            <Text style={styles.successText}>Successfully added expense.</Text>
          </View>
          <View style={styles.loginAccount}>
            <TouchableOpacity style={styles.loginAccount}>
              <Text style={styles.loginAccountBtn}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
