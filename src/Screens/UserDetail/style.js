import { StyleSheet, Dimensions } from 'react-native';
 import colors from '../../Styles/colors';
 const {width, height} = Dimensions.get('screen');
 const styles = StyleSheet.create({
     attendenceCorrectionWrap:{
         flex: 1,
         position:'relative',
         backgroundColor:'#FAFAFA',
     },

     attendenceCorrectionBanner:{
         backgroundColor:colors.Blue,
         height:185,
         paddingTop:39,
         alignItems:'center'
     },
     bannerHeading:{
         fontSize: 16,
         lineHeight: 25,
         fontWeight: "700",
         color:colors.White,
     },
     backBtn:{
         alignSelf:"flex-start",
         marginLeft:20,
         top:-10,
         position:"relative",
     }, 
     attendenceCorrectionWrapInner:{
         width:335,
         backgroundColor:colors.White,
         borderRadius: 12,
         marginTop: -90,
         paddingHorizontal:14,
         paddingVertical:22,
         alignSelf:'center'
     },
     profileWrap:{
         width:304,
         alignSelf: "center",       
         backgroundColor:colors.White,
         borderRadius: 12,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.15,
         shadowRadius: 3.84,
         elevation: 5,
         paddingHorizontal:14,
         paddingVertical:22,
         marginBottom:10
     },
     profile:{
         flexDirection:'row',
         alignItems:'flex-start',
         marginBottom:18
     },
    
     profileText:{
         marginLeft:10,
     },
     profileName:{
         fontSize: 16,
         lineHeight: 25,
         fontWeight: "bold",
         color:colors.Blue,
     },
     profileJob:{
         fontSize: 14,
         lineHeight: 21,
         fontWeight: "500",
         color:"#C9C9C9",
     },
     timeBoxWrap:{
         flexDirection:'row',
         justifyContent:"space-between",
         width:'100%'
     },
     timeBoxWraps:{
        flexDirection:'row',
        justifyContent:"space-between",
        width:'100%',
        marginTop:20
    },
    timeBoxWrapss:{
        flexDirection:'column',
        justifyContent:"space-between",
        width:'100%',
        marginTop:20
    },
     timeLabel:{
         fontSize: 14,
         lineHeight: 21,
         fontWeight: "600",
         color:colors.Blue,
         
         
     },
     timeDigit:{
         fontSize: 14,
         lineHeight: 21,
         fontWeight: "400",
         color:'#8B9390',
     },
     btnList:{
         flexDirection:'row',
         alignItems:'flex-start',
         marginTop:28,
         alignItems:'center',
         left:90
     },
     approved:{
         width:108,
         height:28,
         backgroundColor:colors.Blue,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:25,
         marginRight:10
     },
     approvedBtn:{
         fontSize: 10,
         lineHeight: 16,
         fontWeight: "400",
         color:colors.White,
     },
     reject:{
         width:108,
         height:28,
         backgroundColor:colors.White,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:25,
         marginRight:10,
         borderColor:colors.Blue,
         borderWidth:1,
     },
     rejectBtn:{
         fontSize: 10,
         lineHeight: 16,
         fontWeight: "400",
         color:colors.Blue,
     },
     viewIcon:{

     }
 });
 export default styles;
