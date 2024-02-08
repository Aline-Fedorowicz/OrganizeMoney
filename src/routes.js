import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import Money from './pages/Money'
import MoneyExpense from './pages/MoneyExpense'
import CustomTabBar from './components/CustomTabBar'
import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'
import BarNavigation from './pages/BarNavigation'





const Stack = createNativeStackNavigator();


export function Routes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            /> */}


            <Stack.Screen
                name="BarNavigation"
                component={BarNavigation}
                options={{ headerShown: false }}
            />




        </Stack.Navigator>
      
    )
}