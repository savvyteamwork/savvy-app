import React from 'react'
import {Text, View, Image,TouchableOpacity,ImageBackground,Button,} from 'react-native';
import images from '../../Styles/images';
import styles from './style'

export const Calendar = () => {
  return (
    <View style={styles.dashboardWrap}>
        <View style={styles.dashboardBanner}>
        <View style={styles.backBtn}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={images.ArrowBack} style={styles.backBtnImg}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.bannerHeading}>Calendar</Text>
        </View>
        <View style={styles.detailWrap}>
            <View style={styles.detailInner}>
                <View style={styles.detailHead}>
                    <View style={styles.detailHeadLeft}>
                        <Text style={styles.leftLable}>Working Hours</Text>
                    </View>
                    <View style={styles.detailHeadRight}>
                        <Text style={styles.rightLabel}>Today</Text>
                    </View>
                </View>
                <View style={styles.graphInfo}>
                    <Text style={styles.leftLable}>3 h 45 m</Text>
                    <Text style={styles.rightLabel}>Today</Text>
                </View>
                <View style={styles.graphImg}>
                    <Image source={images.GraphImg} style={styles.loginLeftArrow}/>
                </View>
            </View>
            <View style={styles.calenderBtnList}>
                <TouchableOpacity style={styles.calBtn}>
                    <Text style={styles.calBtnText}>Annual Leaves</Text>
                    <Text style={styles.calBtnValue}>4/9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calBtn}>
                    <Text style={styles.calBtnText}>Annual Leaves</Text>
                    <Text style={styles.calBtnValue}>4/9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calBtn}>
                    <Text style={styles.calBtnText}>Annual Leaves</Text>
                    <Text style={styles.calBtnValue}>4/9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calBtn}>
                    <Text style={styles.calBtnText}>Annual Leaves</Text>
                    <Text style={styles.calBtnValue}>4/9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.calBtn}>
                    <Text style={styles.calBtnText}>Annual Leaves</Text>
                    <Text style={styles.calBtnValue}>4/9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.detailInner}>
                <View style={styles.detailHead}>
                    <View style={styles.detailHeadLeft}>
                        <Text style={styles.leftLable}>Attendance</Text>
                    </View>
                    <View style={styles.detailHeadRight}>
                        <Text style={styles.rightLabel}>28 Dec, 2021</Text>
                    </View>

                </View>
                <View style={styles.detailAttendanceList}>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                    <View style={styles.detailAttendanceItem}>
                        <Text style={styles.rightLabel}>Present</Text>
                        <Text style={styles.itemLeftLable}>25</Text>
                    </View>
                </View>
            </View>
            
        </View>
       
        
    </View>
  )
}
