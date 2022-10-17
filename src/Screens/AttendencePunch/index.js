import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  ImageBackground,
  Button,
  TextInput,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import Geolocation from '@react-native-community/geolocation';
// import haversine from 'haversine-destance';

export const AttendancePunch = ({navigation}) => {
  const [punch, setPunch] = useState(true);
  const [date, setDate] = useState(new Date());
  const [attendancePunch, setAttendencePunch] = useState(false);
  const [dest, setDest] = useState(null);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  useEffect(() => {}, []);

  function destance(lat1, lon1, lat2, lon2) {
    //convert to radians
    var ct = Math.PI / 180.0;
    lon1 *= ct;
    lat1 *= ct;
    lon2 *= ct;
    lat2 *= ct;

    var R = 3959.0; //miles
    var d =
      Math.acos(
        Math.sin(lat1) * Math.sin(lat2) +
          Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1),
      ) * R;
    return d;
  }

  //AUTO SHOW

  //end

  const handlePunch = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setLat(pos.coords.latitude);
        setLong(pos.coords.longitude);
        const officeCircle = destance(
          pos.coords.latitude,
          pos.coords.longitude,
          33.551288207400106,
          73.12434163771127,
        );
        setDest(officeCircle);
        if (officeCircle < 0.0610686) {
          setAttendencePunch(true);
          setPunch(false);
          setDate(date);
          Alert.alert(
            `Punch Accepted! 
            Today Date is:(${date.toLocaleDateString()})`,
          );
        } else {
          setAttendencePunch(false);
          setPunch(true);
          Alert.alert('you are Out');
        }
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000},
      // e => setError(e.message)
    );
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     pos => {
  //       setLat(pos.coords.latitude);
  //       setLong(pos.coords.longitude);
  //       const officeCircle = destance(
  //         pos.coords.latitude,
  //         pos.coords.longitude,
  //         33.551288207400106,
  //         73.12434163771127,
  //       );
  //       setDest(officeCircle);
  //       if (officeCircle < 0.0610686) {
  //         setAttendencePunch(true);
  //         setPunch(false);
  //         setDate(date);
  //         Alert.alert(
  //           `Punch Accepted!
  //     Today Date is:(${date.toLocaleDateString()})`,
  //         );
  //       } else {
  //         setAttendencePunch(false);
  //         setPunch(true);
  //         Alert.alert('you are Out of Office Range');
  //       }
  //     },
  //     error => Alert.alert('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 20000},
  //     // e => setError(e.message)
  //   );
  // }, []);
  return (
    <View style={styles.attendanceWrap}>
      <View style={styles.attendanceBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bannerHeading}>Attendence Punch In/Out</Text>
      </View>
      <View style={styles.punchAttendanceWrap}>
        <View style={styles.punchAttendanceHead}>
          <Text style={styles.punchAttendanceHeading}>Manually</Text>
        </View>
        <View style={styles.punchInWrap}>
          <TouchableOpacity
            style={punch ? styles.punchIn : styles.punchOut}
            onPress={() => {
              handlePunch();
              setPunch(false);
            }}>
            <Text style={styles.punchInText}>Punch In</Text>
          </TouchableOpacity>
          <Text style={styles.punchInDate}>
            {date ? date.toLocaleString('en-US', options) : null}
          </Text>
        </View>
        <View style={styles.punchOutWrap}>
          <TouchableOpacity
            style={punch ? styles.punchOut : styles.punchIn}
            onPress={() => {
              setPunch(true);
              alert('Thank You!');
            }}>
            <Text style={styles.punchOutText}>Punch Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
