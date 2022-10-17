import React, {useState} from 'react';
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
import styles from './style';
import {List} from 'react-native-paper';
import {MyExpense} from '../MyWork/MyExpense';

export const Expense = ({navigation}) => {
  const [tab, setTab] = useState(1);
  return (
    <View style={styles.attendanceWrap}>
      <View style={styles.attendanceBanner}>
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
            <Text style={styles.tabtext}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tab == 2 ? styles.selectedBannerHeading : styles.bannerHeading
            }
            onPress={() => setTab(2)}>
            <Text style={styles.tabtext}>My Expense</Text>
          </TouchableOpacity>
        </View>
      </View>
      {tab == 1 ? (
        <>
          <View style={styles.accordionWrap}>
            <List.Section>
              <List.Accordion
                style={styles.accordionItem}
                title="Expense Claim"
                right={props => (
                  <Image
                    source={images.LeftArrow}
                    style={styles.loginLeftArrow}
                  />
                )}
                onPress={() =>
                  navigation.navigate('expenseclaim')
                }></List.Accordion>
              {/* <List.Accordion style={styles.accordionItem} title="Posted Claim"
                    right={props =><Image source={images.LeftArrow} style={styles.loginLeftArrow}/>}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion> */}
              <List.Accordion
                style={styles.accordionItem}
                title="Expense Balance"
                right={props => (
                  <Image
                    source={images.LeftArrow}
                    style={styles.loginLeftArrow}
                  />
                )}
                onPress={() =>
                  navigation.navigate('expensebalance')
                }></List.Accordion>
            </List.Section>
          </View>
        </>
      ) : (
        <>
          <MyExpense />
        </>
      )}
    </View>
  );
};
