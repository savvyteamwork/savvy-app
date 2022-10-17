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
        shadowColor:'#0000000A',
        shadowOffset:'12',
        shadowOpacity:100,
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
    timeList:{
        width:'33%',
    },
    timeLabel:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: "400",
        color:colors.Black,
    },
    timeDigit:{
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "400",
        color:'#8B9390',
    },
    btnList:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginTop:28
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
    Edit:{
        width:108,
        height:28,
        backgroundColor:colors.White,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
        marginRight:15,
        marginLeft:60,
        borderColor:colors.Blue,
        borderWidth:1,
        
    },
    rejectBtn:{
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "400",
        color:colors.Blue,
    }
});
export default styles;
