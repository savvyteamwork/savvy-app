import React, {useState, useEffect, useContext} from 'react';
import {AppState} from '../../context/AppContext';
import Loader from '../../Components/Loader/Loader';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Button,
} from 'react-native';
import styles from './style';

export const MyLoan = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userLoan, setUserLoan] = useState([]);
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

      return categoryList.response;
    } catch (err) {
      alert(err);
    }
  };

  const fetchUserLoans = async () => {
    try {
      setIsLoading(true);
      const empId = token.employee_detail.id;
      const res = await fetch(
        `http://savvy.developerpro.co/api/get_loan_requests/${empId}`,
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
            if (el.loan_type_id == le.id)
              typeData.push({...el, category_name: le.name});
          });
        });
        setUserLoan(typeData);
      } else {
        throw new Error('Faild to Get User Leaves');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserLoans();
  }, []);

  return (
    <ScrollView style={styles.myworkWrap}>
      <View style={styles.attendenceCorrectionBanner}></View>
      <View style={styles.attendenceCorrectionWrapInner}>
        {isLoading ? (
          <Loader />
        ) : userLoan.length == 0 ? (
          <Text style={{textAlign: 'center'}}>No Record Found</Text>
        ) : (
          userLoan.map(el => {
            return (
              <View style={styles.profileWrap} key={el.id}>
                <View style={styles.timeBoxWrap}>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Date</Text>
                    <Text style={styles.timeDigit}>
                      {new Date(el.apply_date).toLocaleDateString('en-CA', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                  </View>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Loan Type</Text>
                    <Text style={styles.timeDigit}>{el.category_name}</Text>
                  </View>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Amount</Text>
                    <Text style={styles.timeDigit}>{el.amount}</Text>
                  </View>
                </View>
                <View style={styles.btnList}>
                  <TouchableOpacity style={styles.Edits}>
                    <Text style={styles.statusbtn}>pending</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
};
