import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AppState} from '../../context/AppContext';
import Loader from '../../Components/Loader/Loader';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {MyLeaves} from '../MyWork/MyLeaves';
import {CONSTANTS} from '../../constants';

export const LeaveRequest = ({navigation}) => {
  const [tab, setTab] = useState(1);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);
  const [isToDatePickerVisible, setToDatePickerVisibility] = useState(false);
  const [leavCategories, setLeaveCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {token} = useContext(AppState);

  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${CONSTANTS.BACKEND_URL}leave_categories/get`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token.access_tokens}`,
        },
      });
      const categoryList = await res.json();

      setLeaveCategories(categoryList.response);
    } catch (err) {
      alert(err);
    }
  };

  const postLeaveRequest = () => {
    const leaveRequest = {
      employee_leave_id: selectedCategory.id,
      employee_id: token.employee_detail.id,
      status: 1,
      is_confirmed: 0,
      is_cancelled: 0,
      cancel_reason: '',
      annotaion: '',
      approved_by: '',
      from_date: fromDate.toLocaleString('en-CA', dateOptions),
      to_date: toDate.toLocaleString('en-CA', dateOptions),
    };
    setIsLoading(true);
    axios
      .post(`${CONSTANTS.BACKEND_URL}leave_request/add`, leaveRequest, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token.access_tokens}`,
        },
      })
      .then(res => {
        console.log('checking response', res);
        data = res.data;
        console.log(data);
        if (data.status === 'success') {
          setIsLoading(false);
          alert('Request Successful');
        } else {
          setIsLoading(false);
          throw new Error('Request Faild');
        }
      })
      .catch(err => alert(err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const showDatePicker = () => {
    setFromDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setFromDatePickerVisibility(false);
  };
  const showDatePickers = () => {
    setToDatePickerVisibility(true);
  };

  const hideDatePickers = () => {
    setToDatePickerVisibility(false);
  };
  const handlefromDateConfirm = date => {
    setFromDate(date);
    hideDatePicker();
  };
  const handleToDateConfirm = date => {
    setToDate(date);
    hideDatePickers();
  };

  return (
    <View style={styles.leaveWrap}>
      <ScrollView style={styles.scrollContainerwraper}>
        <View style={styles.leaveBanner}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={images.ArrowBack} style={styles.backBtnImg} />
            </TouchableOpacity>
          </View>

          <View style={styles.tabbtn}>
            <TouchableOpacity
              style={
                tab == 1 ? styles.selectedBannerHeading : styles.bannerHeading
              }
              // title="Leave Request"
              onPress={() => setTab(1)}>
              <Text style={styles.tabtext}>LeaveRequest</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                tab == 2 ? styles.selectedBannerHeading : styles.bannerHeading
              }
              // title="My leaves"
              onPress={() => setTab(2)}>
              <Text style={styles.tabtext}>My Leaves</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* main */}
        {tab == 1 ? (
          <>
            <View style={styles.timeBoxWrap}>
              <View style={styles.timeBox}>
                <View style={styles.timeList}>
                  <Text style={styles.timeLabel}>8</Text>
                  <Text style={styles.timeDigit}>Available</Text>
                </View>
                <View style={styles.timeListBorder}>
                  <Text style={styles.timeLabel}>22</Text>
                  <Text style={styles.timeDigit}>All</Text>
                </View>
                <View style={styles.timeList}>
                  <Text style={styles.timeLabel}>14</Text>
                  <Text style={styles.timeDigit}>Used</Text>
                </View>
              </View>
            </View>

            <View style={styles.buttonListWrap}>
              <SelectDropdown
                defaultButtonText="Select Leave Type"
                data={leavCategories}
                buttonStyle={styles.dropdown}
                onSelect={(selectedItem, index) => {
                  setSelectedCategory(() => selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem.category_name;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item.category_name;
                }}
              />
            </View>

            <ScrollView style={styles.calenderWrap}>
              <View style={styles.calenderForm}>
                <Text style={styles.calenderFormLabel}>From</Text>

                <TouchableOpacity
                  style={styles.inputview}
                  onPress={showDatePicker}>
                  <Text style={styles.calenderFormInput}>
                    {fromDate
                      ? fromDate.toLocaleString('en-US', options)
                      : null}
                  </Text>
                  <Image source={images.DownArrow} style={styles.dwonBtnImgs} />
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isFromDatePickerVisible}
                  mode="date"
                  onConfirm={handlefromDateConfirm}
                  onCancel={hideDatePicker}
                  date={fromDate}
                  onChange={date => setFromDate(date)}
                />
              </View>
              <View style={styles.calenderForm}>
                <Text style={styles.calenderFormLabel}>To</Text>

                <TouchableOpacity
                  style={styles.inputview}
                  onPress={showDatePicker}>
                  <Text style={styles.calenderFormInput}>
                    {toDate ? toDate.toLocaleString('en-US', options) : null}
                  </Text>
                  <Image source={images.DownArrow} style={styles.dwonBtnImgs} />
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isToDatePickerVisible}
                  mode="date"
                  onConfirm={handleToDateConfirm}
                  onCancel={hideDatePickers}
                  date={toDate}
                  onChange={date => setToDate(date)}
                />
              </View>

              <View style={styles.calenderFormBtn}>
                <TouchableOpacity
                  style={styles.formBtn}
                  onPress={postLeaveRequest}>
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <Text style={styles.formBtnText}>Confirm</Text>
                  )}
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        ) : (
          <>
            <MyLeaves />
          </>
        )}

        {/* main ends */}
      </ScrollView>
    </View>
  );
};
