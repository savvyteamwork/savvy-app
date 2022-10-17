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
import {Badge, Box, NativeBaseProvider, VStack} from 'native-base';
import images from '../../Styles/images';
import styles from './style';

export const Dashboard = ({navigation}) => {
  const [user, setUser] = useState({});
  const {token, isReviewer} = useContext(AppState);
  console.log('isReviewer', isReviewer);
  const fetchUser = async () => {
    try {
      const empId = token.employee_detail.id;
      const res = await fetch(
        `http://savvy.developerpro.co/api/employee/detail/${empId}`,
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
    <NativeBaseProvider>
      <View style={styles.dashboardWrap}>
        <ScrollView style={styles.dashboardWrap}>
          <View style={styles.dashboardBanner}>
            <View style={styles.backBtn}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={images.ArrowBack} style={styles.backBtnImg} />
              </TouchableOpacity>
            </View>
            <Text style={styles.bannerHeading}>Dashboard </Text>
          </View>
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
                  {user?.user?.name || 'Klaus Mikelson'}
                </Text>
                <Text style={styles.profileJob}>General Cordinator</Text>
              </View>
            </View>
            <View style={styles.profileDes}>
              <View style={styles.profileDesList}>
                <Text style={styles.desListLabel}>Emp Code:</Text>
                <Text style={styles.desListLabelRight}>21EWO98D</Text>
              </View>
              <View style={styles.profileDesList}>
                <Text style={styles.desListLabel}>Email:</Text>
                <Text style={styles.desListLabelRight}>
                  {user?.user?.email || 'johndoe@email.com'}
                </Text>
              </View>
              <View style={styles.profileDesList}>
                <Text style={styles.desListLabel}>Reporting Manager:</Text>
                <Text style={styles.desListLabelRight}>Elijah Mikelson</Text>
              </View>
            </View>
          </View>
          <View style={styles.categoryWrap}>
            <Text style={styles.categoryHeading}>Select Category here</Text>
            <View style={styles.categoryDes}>
              {isReviewer ? (
                <View style={styles.categoryList}>
                  <View style={styles.categoryListImg}>
                    <Image
                      source={images.TrueIcon}
                      style={styles.categoryIcon}
                    />
                  </View>
                  <View style={styles.categoryListText}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('approval')}>
                      <Box alignItems="center">
                        <VStack>
                          <Badge // bg="red.400"
                            colorScheme="danger"
                            rounded="full"
                            mb={-2}
                            mr={-4}
                            zIndex={1}
                            variant="solid"
                            alignSelf="flex-end"
                            _text={{
                              fontSize: 12,
                            }}>
                            2
                          </Badge>
                          <Text style={styles.categoryListLabel}>
                            Approvals
                          </Text>
                        </VStack>
                      </Box>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : null}
              <View style={styles.categoryList}>
                <View style={styles.categoryListImg}>
                  <Image source={images.LeaveIcon} style={styles.leaveIcon} />
                </View>
                <View style={styles.categoryListText}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('leaveRequest')}>
                    <Text style={styles.categoryListLabel}>Leave Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.categoryList}>
                <View style={styles.categoryListImg}>
                  <Image
                    source={images.AttendanceIcon}
                    style={styles.attendanceIcon}
                  />
                </View>
                <View style={styles.categoryListText}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('attendance')}>
                    <Text style={styles.categoryListLabel}>Attendance</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.categoryList}>
                <View style={styles.categoryListImg}>
                  <Image
                    source={images.ExpenseIcon}
                    style={styles.expenseIcon}
                  />
                </View>
                <View style={styles.categoryListText}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('expense')}>
                    <Text style={styles.categoryListLabel}>Expense</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.categoryList}>
                <View style={styles.categoryListImg}>
                  <Image source={images.LoanIcon} style={styles.loanIcon} />
                </View>
                <View style={styles.categoryListText}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('loanRequest')}>
                    <Text style={styles.categoryListLabel}>Loan Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.categoryList}>
                <View style={styles.categoryListImg}>
                  <Image
                    source={images.AdvanceIcon}
                    style={styles.advanceIcon}
                  />
                </View>
                <View style={styles.categoryListText}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('loanApproval')}>
                    <Text style={styles.categoryListLabel}>Advance</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.timeBoxWrap}>
            <View style={styles.timeList}>
              <Text style={styles.timeLabel}>In Time</Text>
              <Text style={styles.timeDigit}>
                {user?.user?.punchin || '05:21:09 am'}
              </Text>
            </View>
            <View style={styles.timeListBorder}>
              <Text style={styles.timeLabel}>Leaves</Text>
              <Text style={styles.timeDigit}>
                {user?.user?.punchin || '05:21:09 am'}
              </Text>
            </View>
            <View style={styles.timeList}>
              <Text style={styles.timeLabel}>Out Time</Text>
              <Text style={styles.timeDigit}>
                {user?.user?.punchin || '05:21:09 am'}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};
