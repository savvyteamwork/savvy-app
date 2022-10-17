import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    dashboardWrap:{
        flex: 1,
        position:'relative',
        backgroundColor:'#FAFAFA',
    },
    dashboardBanner:{
        backgroundColor:colors.Blue,
        height:185,
        paddingTop:39,
        alignItems:'center'
    },
    backBtn:{
        alignSelf:"flex-start",
        marginLeft:20,
        top:-10,
        position:"relative",
    }, 
    bannerHeading:{
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "700",
        color:colors.White,
    },
    detailWrap:{
        marginTop: -90,
        marginBottom:20,
    },
    detailInner:{
        width:335,
        alignSelf: "center",       
        backgroundColor:colors.White,
        borderRadius: 12,
        paddingHorizontal:14,
        paddingVertical:22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailHead:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingBottom:10
    },
    leftLable:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color:colors.Black,
    },
    rightLabel:{
        fontSize: 10,
        lineHeight: 18,
        fontWeight: "400",
        color:'#8B9390',
    },
    itemLeftLable:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color:colors.Blue,
    },
    graphInfo:{
        flexDirection:'column',
        marginBottom:15
    },
    graphImg:{
        height:140,
    },
    detailAttendanceList:{
        flexWrap:'wrap',
        flexDirection:'row'
    },
    detailAttendanceItem:{
        width:'33%',
        height:74,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.White,
        borderRadius: 12,
        paddingHorizontal:14,
        paddingVertical:22,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    },
    calenderBtnList:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginTop:20,
        marginBottom:20,
        width:335,
        alignSelf: "center",    
           
    },
    calBtn:{
        width:'31%',
        height:69,
        backgroundColor:colors.Green,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        marginRight:10
    },
    calBtnText:{
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "400",
        color:colors.White,
    },
    calBtnValue:{
        fontSize: 18,
        lineHeight: 27,
        fontWeight: "400",
        color:colors.White,
    },
   
});
export default styles;
