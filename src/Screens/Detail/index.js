import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import WeeklyReportChart from './BasicChart';
import images from '../../Styles/images';
import styles from './style';

export const Detail = ({navigation}) => {
  const data = [
    {present: 20, id: 1},
    {present: 25, id: 2},
    {present: 25, id: 3},
    {present: 15, id: 4},
    {present: 22, id: 5},
    {present: 35, id: 6},
  ];
  return (
    <ScrollView style={styles.dashboardWrap}>
      <View style={styles.dashboardBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bannerHeading}>Details</Text>
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
            {/* <Image source={images.GraphImg} style={styles.loginLeftArrow} /> */}
            <WeeklyReportChart />
          </View>
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
            {data &&
              data.map((el, ind) => {
                return (
                  <View style={styles.detailAttendanceItem} key={el.id}>
                    <Text style={styles.rightLabel}>Present</Text>
                    <Text style={styles.itemLeftLable}>{el.present}</Text>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={styles.btnList}>
          <TouchableOpacity style={styles.edit}>
            <Text style={styles.editBtn}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.delete}>
            <Text style={styles.deleteBtn}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
