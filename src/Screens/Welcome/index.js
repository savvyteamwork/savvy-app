import React from 'react'
import {Text, View, Image,TouchableOpacity,ImageBackground,Button,} from 'react-native';
import images from '../../Styles/images';
import styles from './style';

export const Welcome = ({navigation}) => {
  return (
    <View style={styles.backgroundWrapper}>
        <ImageBackground source={images.WelcomeBg} resizeMode='cover'  style={{width: '100%', height: '100%'}}>
        <View style={styles.banner}>
            <Text style={styles.bannerHeading}>
                Welcome to Affinity Payroll
            </Text>
            <Text style={styles.bannerText}>
                This application has features to manage approval of correction in 
                attendance, approval of loans and advance, approval of leave requests, 
                approval of expenses.
            </Text>
            
        </View>
        <TouchableOpacity style={styles.startedBtn} onPress={() => navigation.navigate("login")}>
                <Text style={styles.startedBtnText}>Get Started</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}
