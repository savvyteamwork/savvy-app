import React, {useState, useEffect, useContext} from 'react';
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
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import images from '../../Styles/images';
import styles from './style';

export const ExpenseClaim = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [expenseCategory, setExpenseCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [amount, setAmount] = useState('');
  const [recipt, setRecipt] = useState('');
  const [notes, setNotes] = useState('');
  const [calenderIsVisibile, setCalenderIsVisible] = useState(false);
  const {token} = useContext(AppState);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const CAT = [
    {category_name: 'Annual', id: 1},
    {category_name: 'Parental', id: 2},
    {category_name: 'Undpaid', id: 3},
  ];

  const fetchExpenses = async () => {
    try {
      const res = await fetch(
        'http://savvy.developerpro.co/api/expense_type/get',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
        },
      );

      const data = await res.json();
      if (data.status === 'success') {
        setExpenseCategory(data.response);
      } else {
        throw new Error('Faild to fetch expenses list');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const showDatePicker = () => {
    setCalenderIsVisible(true);
  };

  const hideDatePicker = () => {
    setCalenderIsVisible(false);
  };

  const handleDateConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const handleSubmit = async () => {
    try {
      const expense = {
        employee_id: token.employee_detail.id,
        expense_id: selectedCategory.id,
        amount: amount,
        receipt_no: recipt,
        notes: notes,
        expense_date: date.toLocaleString('en-CA', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        }),
      };
      setIsLoading(true);
      const res = await fetch(
        'http://savvy.developerpro.co/api/expense_request/add',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token.access_tokens}`,
          },
          body: JSON.stringify(expense),
        },
      );

      const data = await res.json();
      if (data.status === 'success') {
        setIsLoading(false);
        alert('claim Successfull');
      } else {
        setIsLoading(false);
        throw new Error('faild to claim expense');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ScrollView style={styles.leaveWrap}>
      <View style={styles.leaveBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bannerHeading}>Expense Claim</Text>
      </View>
      <View style={styles.timeBoxWrap}>
        <View style={styles.calenderWrap}>
          <View style={styles.calenderForm}>
            <Text style={styles.calenderFormLabel}>Select Date</Text>

            <TouchableOpacity
              style={styles.calenderView}
              onPress={showDatePicker}>
              <Text style={styles.calenderText}>
                {date ? date.toLocaleString('en-US', options) : null}
              </Text>
              <Image source={images.DownArrow} style={styles.dwonBtnImgs} />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={calenderIsVisibile}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              date={date}
              onChange={date => setDate(date)}
            />
          </View>

          <View style={styles.calenderForm}>
            <Text style={styles.calenderFormLabel}>
              Select Expense Category
            </Text>

            <SelectDropdown
              data={expenseCategory}
              buttonStyle={styles.dropdown}
              buttonTextStyle={{textAlign: 'left', fontSize: 16}}
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

          <View style={styles.calenderForm}>
            <Text style={styles.calenderFormLabel}>Amount</Text>
            <TextInput
              style={styles.calenderFormInput}
              placeholder="$100.00"
              placeholderTextColor="#002251"
              onChangeText={test => setAmount(test)}
            />
          </View>
          <View style={styles.calenderForm}>
            <Text style={styles.calenderFormLabel}>Enter Recipt Number</Text>
            <TextInput
              style={styles.calenderFormInput}
              placeholder=""
              placeholderTextColor="#002251"
              onChangeText={text => setRecipt(text)}
            />
          </View>
          <View style={styles.calenderForm}>
            <Text style={styles.calenderFormLabel}>Notes</Text>
            <TextInput
              style={styles.calenderFormInput}
              placeholder=""
              placeholderTextColor="#002251"
              onChangeText={text => setNotes(text)}
            />
          </View>
          <View style={styles.calenderFormBtn}>
            <TouchableOpacity style={styles.formBtn}>
              <Text style={styles.formBtnText} onPress={handleSubmit}>
                {isLoading ? <Loader /> : 'Submit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
