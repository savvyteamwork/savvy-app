import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  attendanceWrap: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FAFAFA',
  },
  attendanceBanner: {
    backgroundColor: colors.Blue,
    height: 185,
    paddingTop: 39,
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    top: -10,
    position: 'relative',
  },
  bannerHeading: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.White,
  },
  accordionWrap: {
    width: 335,
    alignSelf: 'center',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginTop: -90,
    paddingHorizontal: 14,
    paddingVertical: 22,
    height: '88%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  accordionItem: {
    backgroundColor: 'white',
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: 14,
    lineHeight: 25,
    fontWeight: '400',
    color: colors.White,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  bannerHeading: {
    width: 128,
    height: 30,
    backgroundColor: colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  tabtext: {
    color: colors.Black,
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
  },

  tabbtn: {
    display: 'flex',
    flexDirection: 'row',
  },
  selectedBannerHeading: {
    width: 128,
    height: 30,
    backgroundColor: '#32ADFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
});
export default styles;
