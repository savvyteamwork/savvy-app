import React, {useState, useEffect, useContext} from 'react';
import {AppState} from '../../context/AppContext';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import {CONSTANTS} from '../../constants';

export const Approval = ({navigation}) => {
  const [user, setUser] = useState({});
  const {token, isReviewer} = useContext(AppState);
  const fetchUser = async () => {
    try {
      const empId = token.employee_detail.id;
      const res = await fetch(
        `${CONSTANTS.BACKEND_URL}employee/detail/${empId}`,
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
        setUser(data.response);
      } else {
        throw new Error('app crashed');
      }
    } catch (err) {
      alert('Cant fetch user info');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.dashboardWrap}>
      <ScrollView style={styles.dashboardWrap}>
        <View style={styles.dashboardBanner}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={images.ArrowBack} style={styles.backBtnImg} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bannerHeading}>Approval </Text>
        </View>
        <View style={styles.profileWrap}>
          <Text style={styles.categoryHeading}>Select Category here</Text>
          <View style={styles.categoryDes}>
            <View style={styles.categoryList}>
              <View style={styles.categoryListImg}>
                <Image source={images.LeaveIcon} style={styles.leaveIcon} />
              </View>
              <View style={styles.categoryListText}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('approvalDetail')}>
                  <Text style={styles.categoryListLabel}>Leave Request</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.categoryList}>
              <View style={styles.categoryListImg}>
                <Image source={images.LoanIcon} style={styles.loanIcon} />
              </View>
              <View style={styles.categoryListText}>
                <TouchableOpacity>
                  <Text style={styles.categoryListLabel}>Loan Request</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.categoryList}>
              <View style={styles.categoryListImg}>
                <Image source={images.AdvanceIcon} style={styles.advanceIcon} />
              </View>
              <View style={styles.categoryListText}>
                <TouchableOpacity>
                  <Text style={styles.categoryListLabel}>Advance</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
