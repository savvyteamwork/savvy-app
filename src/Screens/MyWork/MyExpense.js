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
import SelectDropdown from 'react-native-select-dropdown';
import styles from './style';
import {CONSTANTS} from '../../constants';

export const MyExpense = ({navigation}) => {
  const {token} = useContext(AppState);
  const [categories, setCategories] = useState([]);
  const [userExpenses, setUserExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${CONSTANTS.BACKEND_URL}expense_type/get`, {
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

  const fetchUserExpenses = async () => {
    try {
      setIsLoading(true);
      const empId = token.employee_detail.id;
      const res = await fetch(
        `${CONSTANTS.BACKEND_URL}get_employee_expense_requests/${empId}`,
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
            if (el.expense_id == le.id)
              typeData.push({...el, category_name: le.name});
          });
        });
        setUserExpenses(typeData);
      } else {
        throw new Error('Faild to Get User Leaves');
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetchUserExpenses();
  }, []);
  return (
    <View style={styles.myworkWrap}>
      <View style={styles.attendenceCorrectionBanner}>
        <Text style={styles.bannerHeading}>My Expenses</Text>
      </View>
      <ScrollView style={styles.attendenceCorrectionWrapInner}>
        {isLoading ? (
          <Loader />
        ) : userExpenses.length == 0 ? (
          <Text style={{textAlign: 'center'}}>No Record Found</Text>
        ) : (
          userExpenses.map(el => {
            return (
              <View style={styles.profileWrap} key={el.id}>
                <View style={styles.timeBoxWrap}>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Date</Text>
                    <Text style={styles.timeDigit}>
                      {new Date(el.expense_date).toLocaleDateString('en-CA', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </Text>
                  </View>
                  <View style={styles.timeLists}>
                    <Text style={{textAlign: 'center'}}>
                      {el.category_name}
                    </Text>
                  </View>
                  <View style={styles.timeList}>
                    <Text style={styles.timeLabel}>Amount</Text>
                    <Text style={styles.timeDigit}>{el.amount}</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.Edit}>
                  <Text style={styles.rejectBtn}>status</Text>
                </TouchableOpacity>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
