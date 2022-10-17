import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  dashboardWrap: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FAFAFA',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    top: -10,
    position: 'relative',
  },
  dashboardBanner: {
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
  profileWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginTop: -90,
    paddingHorizontal: 14,
    paddingVertical: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#C9C9C9',
    paddingBottom: 10,
  },

  profileText: {
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: 'bold',
    color: colors.Blue,
  },
  profileJob: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#C9C9C9',
  },
  profileDesList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  desListLabel: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#C9C9C9',
  },
  desListLabelRight: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: '#000',
  },
  categoryWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 14,
    paddingVertical: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryHeading: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
    color: colors.Black,
  },
  categoryDes: {},
  categoryList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 15,
    alignItems: 'center',
  },
  categoryListImg: {
    marginRight: 20,
  },
  categoryListLabel: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    color: colors.Black,
  },
  timeBoxWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginTop: 20,
    paddingHorizontal: 14,
    paddingVertical: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeList: {
    alignItems: 'center',
    width: '33%',
  },
  timeListBorder: {
    alignItems: 'center',
    borderColor: '#ccc',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    width: '33%',
  },
  timeLabel: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '400',
    color: '#8B9390',
  },
  timeDigit: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    color: colors.Black,
  },
  categoryIcon: {
    height: 30,
    width: 30,
  },
});
export default styles;