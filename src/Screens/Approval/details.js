import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AppState} from '../../context/AppContext';
import Loader from '../../Components/Loader/Loader';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import images from '../../Styles/images';
import styles from './style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
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
          <MyLeaves/>
        </>
      </ScrollView>
    </View>
    )
}