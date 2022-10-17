import { StyleSheet, Dimensions } from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    backgroundWrapper:{
        flex: 1,
        position:"relative",
        
    },
    successBanner:{
        width:335,
        height:293,
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:80,
    },
    backBtn:{
        alignSelf:"flex-start",
        marginLeft:20,
        top:-10,
        position:"relative",
    }, 
    successBg: {
        flex: 1,
        width: width + 2,
        justifyContent:'center',
        alignSelf:'flex-end',
        flexDirection:'column'
    },
    successIcon:{
        width:86,
        height:86,
        borderRadius:100,
        backgroundColor:'rgba(108, 212, 247, 0.15)',
        zIndex:-9,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent:'center',
        position:'relative',
        marginBottom:12,
    },
    trueIcon:{
        zIndex:999,
        opacity:1
    },
    successHead:{
        justifyContent:'center',
        alignItems:'center'
    },
    successHeading:{
        color: colors.Blue,
        fontSize: 24,
        lineHeight: 35,
        fontWeight: "bold",
    },
    successText:{
        color: colors.Grey,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "400",
    }
    
});
export default styles;
