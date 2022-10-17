import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import styles from './style';

export const MyAttendence = ({navigation}) => {
  return (
    <ScrollView style={styles.myworkWrap}>
      <View style={styles.attendenceCorrectionBanner}>
        <Text style={styles.heading}>My Attendance</Text>
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

          <TouchableOpacity style={styles.Edit}>
            <Text style={styles.rejectBtn}>Status</Text>
          </TouchableOpacity>
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

          <TouchableOpacity style={styles.Edit}>
            <Text style={styles.rejectBtn}>Status</Text>
          </TouchableOpacity>
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

          <TouchableOpacity style={styles.Edit}>
            <Text style={styles.rejectBtn}>Status</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
