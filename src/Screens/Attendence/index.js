import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  TextInput,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import {List} from 'react-native-paper';
import {MyAttendence} from '../MyWork/MyAttendence';

export const Attendance = ({navigation}) => {
  const [tab, setTab] = useState(1);

  return (
    <View style={styles.attendanceWrap}>
      <View style={styles.attendanceBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.bannerHeading}>Attendance</Text> */}
        <View style={styles.tabbtn}>
          <TouchableOpacity
            style={
              tab == 1 ? styles.selectedBannerHeading : styles.bannerHeading
            }
            // title="Leave Request"
            onPress={() => setTab(1)}>
            <Text style={styles.tabtext}>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tab == 2 ? styles.selectedBannerHeading : styles.bannerHeading
            }
            // title="My leaves"
            onPress={() => setTab(2)}>
            <Text style={styles.tabtext}>My Attendance</Text>
          </TouchableOpacity>
        </View>
      </View>
      {tab == 1 ? (
        <>
          <View style={styles.accordionWrap}>
            <List.Section>
              <List.Accordion
                style={styles.accordionItem}
                title="Attendence Punch In/Out"
                right={props => (
                  <Image
                    source={images.LeftArrow}
                    style={styles.loginLeftArrow}
                  />
                )}
                onPress={() =>
                  navigation.navigate('attendancepunch')
                }></List.Accordion>
              <List.Accordion
                style={styles.accordionItem}
                title="Attendence Correction"
                right={props => (
                  <Image
                    source={images.LeftArrow}
                    style={styles.loginLeftArrow}
                  />
                )}
                onPress={() =>
                  navigation.navigate('attendenceCorrection')
                }></List.Accordion>
            </List.Section>
          </View>
        </>
      ) : (
        <>
          <MyAttendence />
        </>
      )}
    </View>
  );
};
