import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    backgroundWrapper:{
        flex: 1,
        position:"relative"
    },
    WelcomeBg: {
        flex: 1,
        width: width + 2,
        paddingTop:40,
    },
    bannerHeading:{
        width:245,
        // marginTop: 30,
        color: "white",
        fontSize: 28,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
    },
    bannerText:{
        width:298,
        color: "white",
        fontSize:14,
        lineHeight: 24,
        fontWeight: "normal",
        textAlign: "center",
        marginTop:10,
        alignSelf: "center",
    },
    startedBtn: {
        width:327,
        height:52,
        backgroundColor: "white",
        borderRadius: 4,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        position:"absolute",
        bottom:50,        
        
    }, 
    startedBtnText:{
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "bold",
        color:colors.Blue,
    }
});
export default styles;
