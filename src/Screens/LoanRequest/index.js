import React, {useState, useEffect} from 'react';
import {useContext} from 'react';
import {AppState} from '../../context/AppContext';
import Loader from '../../Components/Loader/Loader';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import {MyLoan} from '../MyWork/MyLoan';
// import DateTimePicker from '@react-native-community/datetimepicker';

export const LoanRequest = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [tab, setTab] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isFromDatePickerVisible, setFromDatePickerVisibility] =
    useState(false);

  const [loaneCategories, setLoaneCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const {token} = useContext(AppState);

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        'http://savvy.developerpro.co/api/get_loan_types',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
        },
      );
      const categoryList = await res.json();
      if (categoryList.status === 'success') {
        setLoaneCategories(categoryList.response);
      } else {
        throw new Error('Faild to fetch Categries');
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = async () => {
    try {
      const LoanRequest = {
        employee_id: token.employee_detail.id,
        loan_type_id: selectedCategory.id,
        apply_date: fromDate.toLocaleString('en-CA', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
        amount: amount,
        notes: notes,
      };
      setIsLoading(true);
      let res = await fetch(
        'http://savvy.developerpro.co/api/loan_request/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
          body: JSON.stringify(LoanRequest),
        },
      );
      let resJson = await res.json();

      if (resJson.status === 'success') {
        setIsLoading(false);
        alert('Loan Request Submited Successfully');
      } else {
        throw new Error('Faild to submit Loan Request');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const showDatePicker = () => {
    setFromDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setFromDatePickerVisibility(false);
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

  const options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <View style={styles.leaveWrap}>
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
            onPress={() => setTab(1)}>
            <Text style={styles.tabtext}>LoanRequest</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tab == 2 ? styles.selectedBannerHeading : styles.bannerHeading
            }
            onPress={() => setTab(2)}>
            <Text style={styles.tabtext}>My Loan</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bannersHeading}>Loan Request</Text>
      </View>
      {tab == 1 ? (
        <>
          <View style={styles.buttonListWrap}>
            <SelectDropdown
              data={loaneCategories}
              buttonStyle={styles.dropdown}
              onSelect={(selectedItem, index) => {
                setSelectedCategory(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem.name;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item.name;
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
                  {fromDate ? fromDate.toLocaleString('en-US', options) : null}
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

            <TextInput
              style={styles.calenderForm}
              placeholder="Amount"
              onChangeText={text => setAmount(text)}
            />

            <TextInput
              style={styles.calenderForm}
              placeholder="Notes"
              onChangeText={text => setNotes(text)}
            />

            <View style={styles.calenderFormBtn}>
              <TouchableOpacity style={styles.formBtn} onPress={handleSubmit}>
                <Text style={styles.formBtnText}>
                  {isLoading ? <Loader /> : 'Confirm'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <MyLoan />
        </>
      )}
    </View>
  );
};
