import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  leaveWrap: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FAFAFA',
  },
  leaveBanner: {
    backgroundColor: colors.Blue,
    height: 185,
    paddingTop: 39,
    alignItems: 'center',
  },
  bannerHeading: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.White,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    top: -10,
    position: 'relative',
  },
  timeBoxWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginTop: -90,
    paddingHorizontal: 14,
    paddingVertical: 22,
  },
  calenderWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 22,
  },
  calenderForm: {
    marginBottom: 20,
  },
  calenderFormLabel: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#C1C7D0',
    marginBottom: 10,
  },
  calenderFormInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
  },
  calenderFormBtn: {
    alignSelf: 'center',
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: colors.Blue,
  },
  formBtnText: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    color: colors.White,
  },
  calenderView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  calenderText: {
    borderBottomColor: '#ccc',
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '400',
    flex: 1,
    // position:"relative"
  },
  dropdown: {
    width: '100%',
    backgroundColor: colors.White,
    borderRadius: 12,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    shadowColor: '#000',
    paddingHorizontal: 0,
    marginHorizontal: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
export default styles;
