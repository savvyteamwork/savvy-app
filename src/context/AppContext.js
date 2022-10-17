import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {NavigationContext} from '@react-navigation/native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

export const AppState = createContext();

const AppContext = ({children}) => {
  const [token, setToken] = useState(null);
  const [Advance, setAdvance] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReviewer, setIsReviewer] = useState(false);

  const navigation = useNavigation();

  const storeData = async () => {
    try {
      if (token !== null) {
        await AsyncStorage.setItem('token', JSON.stringify(token));
      } else {
        const getToken = await AsyncStorage.getItem('token');
        const parsedToken = JSON.parse(getToken);
        setToken(parsedToken);
      }
    } catch (e) {
      alert('something went wring');
    }
  };
  useEffect(() => {
    storeData();
  }, []);

  useEffect(() => {
    if (token) {
      navigation.navigate('bottomTab');
    } else {
      navigation.navigate('login');
    }
  }, [token]);

  const handleLogin = (data, navigation) => {
    setIsLoading(true);
    fetch('http://savvy.developerpro.co/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        data?.user?.is_reviewer === '1'
          ? setIsReviewer(true)
          : setIsReviewer(false);

        if (data.message === 'Invalid login details') {
          setIsLoading(false);
          alert(data.message);
        } else {
          setIsLoading(false);
          setToken(() => data);
          navigation.navigate('bottomTab');
        }
      })
      .catch(err => alert(err.message));
  };

  const authState = {
    token: token,
    loginUser: handleLogin,
    isLoading: isLoading,
    Advance,
    setAdvance,
    isReviewer,
  };

  return <AppState.Provider value={authState}>{children}</AppState.Provider>;
};

export default AppContext;
