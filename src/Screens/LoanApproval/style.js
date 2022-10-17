// import { StyleSheet, Dimensions } from 'react-native';
// import colors from '../../Styles/colors';
// const {width, height} = Dimensions.get('screen');
// const styles = StyleSheet.create({
//     attendenceCorrectionWrap:{
//         flex: 1,
//         position:'relative',
//         backgroundColor:'#FAFAFA',
//     },

//     attendenceCorrectionBanner:{
//         backgroundColor:colors.Blue,
//         height:185,
//         paddingTop:39,
//         alignItems:'center'
//     },
//     bannerHeading:{
//         fontSize: 16,
//         lineHeight: 25,
//         fontWeight: "700",
//         color:colors.White,
//     },
//     backBtn:{
//         alignSelf:"flex-start",
//         marginLeft:20,
//         top:-10,
//         position:"relative",
//     },
//     attendenceCorrectionWrapInner:{
//         width:335,
//         backgroundColor:colors.White,
//         borderRadius: 12,
//         marginTop: -90,
//         paddingHorizontal:14,
//         paddingVertical:22,
//         alignSelf:'center'
//     },
//     profileWrap:{
//         width:304,
//         alignSelf: "center",
//         backgroundColor:colors.White,
//         borderRadius: 12,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.15,
//         shadowRadius: 3.84,
//         elevation: 5,
//         paddingHorizontal:14,
//         paddingVertical:22,
//         marginBottom:10
//     },
//     profile:{
//         flexDirection:'row',
//         alignItems:'flex-start',
//         marginBottom:18
//     },

//     profileText:{
//         marginLeft:10,
//     },
//     profileName:{
//         fontSize: 16,
//         lineHeight: 25,
//         fontWeight: "bold",
//         color:colors.Blue,
//     },
//     profileJob:{
//         fontSize: 14,
//         lineHeight: 21,
//         fontWeight: "500",
//         color:"#C9C9C9",
//     },
//     timeBoxWrap:{
//         flexDirection:'row',
//         justifyContent:"space-between",
//         width:'100%'
//     },
//     timeLabel:{
//         fontSize: 14,
//         lineHeight: 21,
//         fontWeight: "600",
//         color:colors.Blue,
//     },
//     timeDigit:{
//         fontSize: 14,
//         lineHeight: 21,
//         fontWeight: "400",
//         color:'#8B9390',
//     },
//     btnList:{
//         flexDirection:'row',
//         alignItems:'flex-start',
//         marginTop:28,
//         alignItems:'center'
//     },
//     approved:{
//         width:108,
//         height:28,
//         backgroundColor:colors.Blue,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:25,
//         marginRight:10
//     },
//     approvedBtn:{
//         fontSize: 10,
//         lineHeight: 16,
//         fontWeight: "400",
//         color:colors.White,
//     },
//     reject:{
//         width:108,
//         height:28,
//         backgroundColor:colors.White,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRadius:25,
//         marginRight:10,
//         borderColor:colors.Blue,
//         borderWidth:1,
//     },
//     rejectBtn:{
//         fontSize: 10,
//         lineHeight: 16,
//         fontWeight: "400",
//         color:colors.Blue,
//     },
//     viewIcon:{

//     }
// });
// export default styles;
// //
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
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: colors.Blue,
  },
  formBtnText: {
    fontSize: 15,
    lineHeight: 23,
    fontWeight: '500',
    textAlign: 'center',
    top: 7,
    color: colors.White,
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
  selectedBannerHeading: {
    width: 128,
    height: 30,
    backgroundColor: '#32ADFC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  dropdown: {
    width: '100%',
    backgroundColor: colors.White,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dwonBtnImgs: {
    width: 16,
    height: 16,
    marginRight: 10,
    marginTop: 10,
  },
  inputview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
  },
});
export default styles;
