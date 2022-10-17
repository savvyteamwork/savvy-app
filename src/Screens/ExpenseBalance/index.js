import React from 'react';
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
import images from '../../Styles/images';
import styles from './style';
import {List} from 'react-native-paper';

export const ExpenseBalance = ({navigation}) => {
  return (
    <ScrollView style={styles.expenseBalanceWrap}>
      <View style={styles.expenseBalanceBanner}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.ArrowBack} style={styles.backBtnImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.bannerHeading}>Expense Balance</Text>
      </View>
      <View style={styles.expenseBalanceList}>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Opening Balance</Text>
          <Text style={styles.expenseBalanceItemRight}>$0</Text>
        </View>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Total Balance</Text>
          <Text style={styles.expenseBalanceItemRight}>$500</Text>
        </View>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Approved Claim</Text>
          <Text style={styles.expenseBalanceItemRight}>0</Text>
        </View>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Max Limit</Text>
          <Text style={styles.expenseBalanceItemRight}>N/A</Text>
        </View>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Unapproved Claim</Text>
          <Text style={styles.expenseBalanceItemRight}>0</Text>
        </View>
        <View style={styles.expenseBalanceItem}>
          <Text style={styles.expenseBalanceItemLeft}>Litre(s)</Text>
          <Text style={styles.expenseBalanceItemRight}>$100.00</Text>
        </View>
      </View>
    </ScrollView>
  );
};
