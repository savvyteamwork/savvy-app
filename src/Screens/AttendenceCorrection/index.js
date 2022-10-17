import React from 'react'
import {Text, View, Image,TouchableOpacity,ImageBackground,Button,} from 'react-native';
import images from '../../Styles/images';
import styles from './style'

export const AttendenceCorrection = ({navigation}) => {
  return (
    <View style={styles.attendenceCorrectionWrap}>
        <View style={styles.attendenceCorrectionBanner}>
        <View style={styles.backBtn}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={images.ArrowBack} style={styles.backBtnImg}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.bannerHeading}>AttendenceCorrection</Text>
        </View>
        <View style={styles.attendenceCorrectionWrapInner}>
            <View style={styles.profileWrap}>
                <View style={styles.timeBoxWrap}>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Date</Text>
                        <Text style={styles.timeDigit}>13 May, 2022</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>In Time</Text>
                        <Text style={styles.timeDigit}>8:59 AM</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Out Time</Text>
                        <Text style={styles.timeDigit}>8:59 PM</Text>
                    </View>
                </View>
                <View style={styles.btnList}>
                    <TouchableOpacity style={styles.Edit}>
                        <Text style={styles.rejectBtn}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileWrap}>
              
                <View style={styles.timeBoxWrap}>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Date</Text>
                        <Text style={styles.timeDigit}>13 May, 2022</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>In Time</Text>
                        <Text style={styles.timeDigit}>8:59 AM</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Out Time</Text>
                        <Text style={styles.timeDigit}>8:59 PM</Text>
                    </View>
                </View>
                <View style={styles.btnList}>
                    <TouchableOpacity style={styles.Edit}>
                        <Text style={styles.rejectBtn}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.profileWrap}>
                <View style={styles.timeBoxWrap}>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Date</Text>
                        <Text style={styles.timeDigit}>13 May, 2022</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>In Time</Text>
                        <Text style={styles.timeDigit}>8:59 AM</Text>
                    </View>
                    <View style={styles.timeList}>
                        <Text style={styles.timeLabel}>Out Time</Text>
                        <Text style={styles.timeDigit}>8:59 PM</Text>
                    </View>
                </View>
                <View style={styles.btnList}>
                    <TouchableOpacity style={styles.Edit}>
                        <Text style={styles.rejectBtn}>Edot</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    </View>
  )
}
