import React, {useState, useEffect, useContext} from 'react';

import {AppState} from '../../context/AppContext';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Loader from '../../Components/Loader/Loader';
import colors from '../../Styles/colors';
import {Center, Modal, Button, FormControl, Input} from 'native-base';
import {CONSTANTS} from '../../constants';

export const MyLeaves = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userLeaves, setUserLeaves] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {token, isReviewer} = useContext(AppState);

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
        `${CONSTANTS.BACKEND_URL}get_leave_request/${empId}`,
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
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 30,
                  }}>
                  {isReviewer ? (
                    <>
                      <TouchableOpacity
                        style={styles.Edit}
                        onPress={() => setShowModal(true)}>
                        <Text style={styles.rejectBtn}>Aproved</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.rejectBtnBg}
                        onPress={() => setShowModal(true)}>
                        <Text style={{color: colors.White}}>Rejected</Text>
                      </TouchableOpacity>
                      <Center>
                        <Modal
                          isOpen={showModal}
                          onClose={() => setShowModal(false)}
                          transparent={true}
                          hasBackdrop={true}
                          backdropColor={'rgba(0, 0, 0, 0.8)'}
                          backdropOpacity={0.3}>
                          <Modal.Content
                            maxWidth="400px"
                            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                            <Modal.CloseButton />
                            <Modal.Header>Rejection Reason</Modal.Header>
                            <Modal.Body style={{backgroundColor: '#FFF'}}>
                              <FormControl>
                                <FormControl.Label>Reason</FormControl.Label>
                                <Input />
                              </FormControl>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button.Group space={2}>
                                <Button
                                  variant="ghost"
                                  colorScheme="blueGray"
                                  onPress={() => {
                                    setShowModal(false);
                                  }}>
                                  Cancel
                                </Button>
                                <Button
                                  onPress={() => {
                                    setShowModal(false);
                                  }}>
                                  Save
                                </Button>
                              </Button.Group>
                            </Modal.Footer>
                          </Modal.Content>
                        </Modal>
                      </Center>
                    </>
                  ) : (
                    <TouchableOpacity style={styles.Edit}>
                      <Text style={styles.rejectBtn}>
                        {el.status == 0 ? 'Pending' : 'Aproved'}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
