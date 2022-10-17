import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';

import {AppState} from '../../context/AppContext';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import Lottie from 'lottie-react-native';
import styles from './style';
import Loader from '../../Components/Loader/Loader';

export const MyLeaves = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userLeaves, setUserLeaves] = useState([]);

  const {token} = useContext(AppState);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        'http://savvy.developerpro.co/api/leave_categories/get',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
        },
      );

      const categoryList = await res.json();

      return categoryList.response;
    } catch (err) {
      alert(err);
    }
  };

  const fetchUserLeaves = async () => {
    try {
      setIsLoading(true);
      const empId = token.employee_detail.id;
      const res = await fetch(
        `http://savvy.developerpro.co/api/get_leave_request/${empId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
        },
      );

      const data = await res.json();
      if (data.status === 'success') {
        const types = await fetchCategories();
        setIsLoading(false);
        let typeData = [];
        data.response.forEach(el => {
          types.forEach(le => {
            if (el.employee_leave.leave_category_id == le.id)
              typeData.push({...el, category_name: le.category_name});
          });
        });
        setUserLeaves(typeData);
      } else {
        throw new Error('Faild to Get User Leaves');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserLeaves();
  }, []);

  return (
    <View style={styles.myworkWrap}>
      <View style={styles.attendenceCorrectionBanner}>
        <Text style={styles.bannerHeading}>My Leaves</Text>
      </View>
      <ScrollView style={styles.attendenceCorrectionWrapInner}>
        {isLoading ? (
          <Loader />
        ) : userLeaves.length == 0 ? (
          <Text style={{textAlign: 'center'}}>No Record Found</Text>
        ) : (
          userLeaves.map((el, i) => {
            return (
              <View style={styles.profileWrap} key={i}>
                <View style={styles.timeBoxWrap}>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Date</Text>
                    <Text style={styles.timeDigit}>{el.from_date || 'hi'}</Text>
                  </View>
                  <View style={styles.timeLists}>
                    <Text style={styles.typeText}>{el.category_name}</Text>
                  </View>
                </View>
                {/* <View style={styles.btnList}> */}
                <TouchableOpacity style={styles.Edit}>
                  <Text style={styles.rejectBtn}>
                    {el.status == 0 ? 'Pending' : 'Aproved'}
                  </Text>
                </TouchableOpacity>
                {/* </View> */}
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
