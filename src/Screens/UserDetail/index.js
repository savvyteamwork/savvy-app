import React, {useState, useContext} from 'react';
import {AppState} from '../../context/AppContext';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';
import images from '../../Styles/images';
import styles from './style';

export const UserDetail = ({navigation}) => {
  const {token} = useContext(AppState);
  const [firstname, setFirstName] = useState('Klaus ');
  const [lastname, setLastName] = useState('Mikelson');
  const [employee, setEmployee] = useState('General Cordinator');
  const [department_id, setDepartment_id] = useState('Ec120');
  const [contract_date, setContract_date] = useState(new Date());
  const [Employee_id, setEmployee_id] = useState('D245c');
  const [is_active, setIs_active] = useState('Active');
  const [otherDetial, setOtherDetail] = useState('xyz');
  const [phone, setPhone] = useState(233456765);
  // const [name ,setName]=useState("")
  return (
    <View style={styles.attendenceCorrectionWrap}>
      <View style={styles.attendenceCorrectionBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bannerHeading}>User Dashboard</Text>
      </View>
      <View style={styles.attendenceCorrectionWrapInner}>
        <View style={styles.profileWrap}>
          <View style={styles.profile}>
            <View style={styles.profileImg}>
              <Image
                source={images.ProfileImg}
                style={styles.loginGoogleIcon}
              />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileName}>
                {token.employee_detail.first_name}
              </Text>
              <Text style={styles.profileJob}>{employee}</Text>
            </View>
          </View>
          <View style={styles.timeBoxWrap}>
            <View style={styles.timeList}>
              <Text style={styles.timeDigit}>Date</Text>
              <Text style={styles.timeLabel}>
                {contract_date.toLocaleDateString()}
              </Text>
            </View>
            <View style={styles.timeList}>
              <Text style={styles.timeDigit}>Shift ID</Text>
              <Text style={styles.timeLabel}>
                {token.employee_detail.shift_id ?? 'Not Available'}
              </Text>
            </View>
          </View>
          <View style={styles.timeBoxWraps}>
            <View style={styles.timeList}>
              <Text style={styles.timeDigit}>Employee ID</Text>
              <Text style={styles.timeLabel}>
                {token.employee_detail.id ?? 'Not Available'}
              </Text>
            </View>
            <View style={styles.timeList}>
              <Text style={styles.timeDigit}>Status</Text>
              <Text style={styles.timeLabel}>{is_active}</Text>
            </View>
          </View>
          <View style={styles.timeBoxWrapss}>
            <Text style={styles.timeDigit}>Address:</Text>
            <Text style={styles.timeLabel}>
              {token.employee_detail.address ?? 'Not Available'}
            </Text>
          </View>
          <View style={styles.timeBoxWrapss}>
            <Text style={styles.timeDigit}>Phone Number:</Text>
            <Text style={styles.timeLabel}>
              {token.employee_detail.phone ?? 'Not Available'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
