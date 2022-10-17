import React, {useState, useContext} from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';
import styles from './style';

export const MyAdvanceLoan = ({navigation}) => {
  const {Advance} = useContext(AppState);
  const [selectedCategory, setSelectedCategory] = useState('Advance Type');
  const [leavCategories, setLeaveCategories] = useState([
    'Personal',
    'Auto',
    'Student',
    'Payday',
  ]);
  const Data = [
    {
      id: 1,
      date: '13 may,2022',
      loantype: 'Personal Loans',
      amount: 100,
      Status: 'Edit',
    },
    {
      id: 2,
      date: '05 may,2022',
      loantype: 'Student Loans',
      amount: 130,
      Status: 'Edit',
    },
    {
      id: 3,
      date: '03 may,2022',
      loantype: 'Credit Loans',
      amount: 140,
      Status: 'Edit',
    },
  ];

  return (
    <View style={styles.myworkWrap}>
      <View style={styles.attendenceCorrectionBanner}>
        <Text style={styles.bannerHeading}>My Advance </Text>
      </View>
      <ScrollView style={styles.attendenceCorrectionWrapInner}>
        {Advance?.map((el, i) => {
          return (
            <View style={styles.profileWrap} key={i}>
              <View style={styles.timeBoxWrap}>
                <View style={styles.timeList}>
                  <Text style={styles.timeLabel}>Date</Text>
                  <Text style={styles.timeDigit}>
                    {el?.date.toDateString()}
                  </Text>
                </View>
                <View style={styles.timeLists}>
                  <Text style={{textAlign: 'center'}}>{el.category}</Text>
                </View>
                <View style={styles.timeList}>
                  <Text style={styles.timeLabel}>Amount</Text>
                  <Text style={styles.timeDigit}>{el?.amount}</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.Edit}>
                <Text style={styles.rejectBtn}>Pending</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
