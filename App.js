import React from 'react';
import AppContext from './src/context/AppContext';
import {Welcome} from './src/Screens/Welcome';
import {SafeAreaView, Image} from 'react-native';
import {Login} from './src/Screens/Login';
import {SignUp} from './src/Screens/SignUp';
import {Dashboard} from './src/Screens/Dashboard';
import {Approval} from './src/Screens/Approval';
import {ApprovalDetails} from './src/Screens/Approval/details';
import {LeaveRequest} from './src/Screens/LeaveRequest';
import {Attendance} from './src/Screens/Attendence';
import {AttendancePunch} from './src/Screens/AttendencePunch';
import {AttendenceCorrection} from './src/Screens/AttendenceCorrection';
import {Detail} from './src/Screens/Detail';
import {Expense} from './src/Screens/Expense';
import {ExpenseClaim} from './src/Screens/ExpenseClaim';
import {ExpenseBalance} from './src/Screens/ExpenseBalance';
import {LoanRequest} from './src/Screens/LoanRequest';
import {LoanApproval} from './src/Screens/LoanApproval';
import {Success} from './src/Screens/Success';
import {Calendar} from './src/Screens/Calendar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyLeaves} from './src/Screens/MyWork/MyLeaves';
import {MyLoan} from './src/Screens/MyWork/MyLoan';
import {MyAttendence} from './src/Screens/MyWork/MyAttendence';
import {MyExpense} from './src/Screens/MyWork/MyExpense';
import images from './src/Styles/images';
import {UserDetail} from './src/Screens/UserDetail';
console.disableYellowBox = true;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const App = () => {
  function BottomNav() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="dashboard"
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={images.ActiveHomeIcon}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={images.InActiveHomeIcon}
                  style={{width: 20, height: 20}}
                />
              ),
          }}
          component={Dashboard}
          initialRouteName="dashboard"
        />
        <Tab.Screen
          name="approval"
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={images.Activeclander}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={images.inActiveclander}
                  style={{width: 20, height: 20}}
                />
              ),
          }}
          component={Approval}
        />
        <Tab.Screen
          name="leaveRequest"
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={images.Activeclander}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={images.inActiveclander}
                  style={{width: 20, height: 20}}
                />
              ),
          }}
          component={LeaveRequest}
        />
        <Tab.Screen
          name="detail"
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={images.Activedashboard}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={images.inActivedashboardIcon}
                  style={{width: 20, height: 20}}
                />
              ),
          }}
          component={Detail}
        />
        <Tab.Screen
          name="userDetail"
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({focused}) =>
              focused ? (
                <Image
                  source={images.ActiveuserIcon}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={images.inActiveuserIcon}
                  style={{width: 20, height: 20}}
                />
              ),
          }}
          component={UserDetail}
        />
      </Tab.Navigator>
    );
  }
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {/* <Attendance/> */}
        {/* <AttendancePunch/> */}
        {/* <AttendenceCorrection/> */}
        {/* <Detail/> */}
        {/* <Expense/> */}
        {/* <ExpenseClaim/> */}
        {/* <ExpenseBalance/> */}
        {/* <LoanApproval/> */}
        {/* <LoanRequest/> */}
        {/* <Success/> */}
        {/* <Calendar/> */}
        <NavigationContainer>
          <AppContext>
            <Stack.Navigator initialRouteName="welcome">
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="welcome"
                component={Welcome}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="login"
                component={Login}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="signup"
                component={SignUp}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="bottomTab"
                component={BottomNav}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="leaveRequest"
                component={LeaveRequest}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="approval"
                component={Approval}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="approvalDetail"
                component={ApprovalDetails}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="attendance"
                component={Attendance}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="attendancepunch"
                component={AttendancePunch}
              />

              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="attendenceCorrection"
                component={AttendenceCorrection}
              />

              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="expense"
                component={Expense}
              />

              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="expenseclaim"
                component={ExpenseClaim}
              />

              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="expensebalance"
                component={ExpenseBalance}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="success"
                component={Success}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="myleaves"
                component={MyLeaves}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="myloan"
                component={MyLoan}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="myattendence"
                component={MyAttendence}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="myexpense"
                component={MyExpense}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="loanRequest"
                component={LoanRequest}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="loanApproval"
                component={LoanApproval}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="myadvanceloan"
                component={MyAttendence}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="clander"
                component={Calendar}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Detail"
                component={Detail}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="userDetail"
                component={UserDetail}
              />
            </Stack.Navigator>
          </AppContext>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};
