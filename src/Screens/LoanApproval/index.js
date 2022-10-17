import React, {useState, useContext} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
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
import Loader from '../../Components/Loader/Loader';
import {MyAdvanceLoan} from '../MyWork/MyAdvanceLoan';
import {AppState} from '../../context/AppContext';
import styles from './style';

export const LoanApproval = ({navigation}) => {
  const {setAdvance} = useContext(AppState);
  const [isLoading, setIsLoading] = useState(false);
  const [notes, setNotes] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [isCalenderVisible, setIsCalenderVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [tab, setTab] = useState(1);

  const showDatePicker = () => {
    setIsCalenderVisible(true);
  };

  const hideDatePicker = () => {
    setIsCalenderVisible(false);
  };
  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const handleSubmit = () => {
    const data = {
      date,
      amount,
      notes,
      category: selectedCategory,
    };
    setAdvance(prev => [...prev, data]);
    setTab(2);
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
            // title="Leave Request"
            onPress={() => setTab(1)}>
            <Text style={styles.tabtext}>Advance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tab == 2 ? styles.selectedBannerHeading : styles.bannerHeading
            }
            // title="My leaves"
            onPress={() => setTab(2)}>
            <Text style={styles.tabtext}>My Advance</Text>
          </TouchableOpacity>
        </View>
      </View>

      {tab == 1 ? (
        <>
          <View style={styles.timeBoxWrap}>
            <View style={styles.calenderWrap}>
              <View style={styles.buttonListWrap}>
                <SelectDropdown
                  data={[{name: 'Urgent'}, {name: 'Medical'}]}
                  buttonStyle={styles.dropdown}
                  onSelect={(selectedItem, index) => {
                    setSelectedCategory(selectedItem.name);
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

              <Text style={styles.calenderFormLabel}>Pick a date</Text>

              <TouchableOpacity
                style={styles.inputview}
                onPress={showDatePicker}>
                <Text style={styles.calenderFormInput}>
                  {date ? date.toLocaleString('en-US', options) : null}
                </Text>
                <Image source={images.DownArrow} style={styles.dwonBtnImgs} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isCalenderVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={date}
                onChange={date => setDate(date)}
              />
            </View>

            <View style={styles.calenderForm}>
              <Text style={styles.calenderFormLabel}>Amount</Text>
              <TextInput
                style={styles.calenderFormInput}
                placeholder="$100.00"
                placeholderTextColor="#002251"
                // value={input.amount}
                keyboardType="number-pad"
                onChangeText={text => setAmount(text)}
              />
            </View>

            <View style={styles.calenderForm}>
              <Text style={styles.calenderFormLabel}>Notes</Text>
              <TextInput
                style={styles.calenderFormInput}
                placeholder=""
                placeholderTextColor="#002251"
                // value={input.notes}
                onChangeText={text => setNotes(text)}
              />
            </View>
            <TouchableOpacity style={styles.formBtn} onPress={handleSubmit}>
              <View style={styles.calenderFormBtn}>
                <Text style={{color: 'white'}}>Submite</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <MyAdvanceLoan />
        </>
      )}
    </View>
  );
};
