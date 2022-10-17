import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    expenseBalanceWrap:{
        flex: 1,
        position:'relative',
        backgroundColor:'#FAFAFA',
    },
    expenseBalanceBanner:{
        backgroundColor:colors.Blue,
        height:98,
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
    expenseBalanceList:{
        marginTop: 27,
    },
    expenseBalanceItem:{
        width:335,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf: "center",       
        backgroundColor:colors.White,
        borderRadius: 4,
        shadowColor:'#0000000A',
        shadowOffset:'12',
        shadowOpacity:100,
        paddingHorizontal:18,
        paddingVertical:22,
        marginBottom:10
    },
    expenseBalanceItemLeft:{
        fontSize: 16,
        lineHeight: 25,
        fontWeight: "400",
        color:colors.Blue,
    },
    expenseBalanceItemRight:{
        fontSize: 14,
        lineHeight: 21,
        fontWeight: "400",
        color:'#CD2D59',
    }
});
export default styles;
