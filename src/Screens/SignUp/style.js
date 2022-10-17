import { StyleSheet, Dimensions } from 'react-native';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
import colors from '../../Styles/colors';
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    backgroundWrapper:{
        flex: 1,
        position:"relative"
    },
    loginBanner:{
        width:335,
        height:564,
        backgroundColor: "white",
        borderRadius: 4,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderRadius:50,
        paddingBottom:30,
    },
    backBtn:{
        alignSelf:"flex-start",
        marginLeft:20,
        top:-10,
        position:"relative",
    }, 
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    WelcomeBg: {
        flex: 1,
        width: width + 2,
        paddingTop:40,
    },
    bannerHeading:{
        width:245,
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
    },
    inputView: {
        backgroundColor: "#F8F7FB",
        borderRadius: 50,
        width: "90%",
        height: 48,
        marginBottom: 20,                     
        borderWidth:1,
        borderColor:colors.Blue,
      },
     
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      forget:{
        justifyContent: "flex-end",
        width: "90%",
        flexDirection:"row"
      },
      forgot_button: {
        height: 30,
        marginBottom: 10,
        color: colors.Blue,
      },
     
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: colors.Blue,
      },
      loginText:{
        color: "white",
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "bold",
      },
    loginBottom:{
        width:335,
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    loginGoogle:{
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
    },
    GoogleIcon:{
    },
    loginGoogleIcon:{
        width:44,
        height:44,
    },
    loginGoogleText:{
        color: "white",
        fontSize:16,
        lineHeight: 25,
        fontWeight: "normal",
        paddingLeft:10,
    },
    loginAccountWrap:{
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        marginTop:10,
    },
    
    loginAccountText:{
        color: "white",
        fontSize:12,
        lineHeight: 18,
        fontWeight: "normal",
        paddingRight:3
    },
    loginAccountBtn:{
        color: "#FE9879",
        fontSize:12,
        lineHeight: 18,
        fontWeight: "normal",
    }
});
export default styles;
