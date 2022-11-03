import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import {MyLeaves} from '../MyWork/MyLeaves';

export const ApprovalDetails = ({navigation}) => {
  return (
    <View style={styles.leaveWrap}>
      <ScrollView style={styles.scrollContainerwraper}>
        <View style={styles.leaveBanner}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={images.ArrowBack} style={styles.backBtnImg} />
            </TouchableOpacity>
          </View>
        </View>
        <>
          <MyLeaves />
        </>
      </ScrollView>
    </View>
  );
};
