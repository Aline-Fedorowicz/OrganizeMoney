import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './pages/Home'
import Money from './pages/Money'
import Store from './pages/Store'
import CustomTabBar from './components/CustomTabBar'
import Welcome from './pages/Welcome'
import SignIn from './pages/SignIn'




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />


        </Stack.Navigator>





        // <Tab.Navigator 
        //     screenOptions={{
        //         headerShown: false,
        //         headerStyle: {
        //             backgroundColor: '#993002',
        //             borderBottomWidth: 0,

        //         },
        //         tabBarHideOnKeyboard: true,
        //         tabBarShowLabel: false,
        //         tabBarActiveTintColor: "#121212",
        //         tabBarStyle: {
        //             borderTopWidth: 0,
        //             backgroundColor: "#FFF"
        //         }

        //     }}
        //     tabBar={(props) => <CustomTabBar {...props} />}

        // >
        //     <Tab.Screen
        //         name="Home"
        //         component={Home}
        //         options={{
        //             tabBarIcon: "compare-arrows"
        //         }}
        //     />


        //     <Tab.Screen
        //         name="Money"
        //         component={Money}
        //         options={{
        //             tabBarIcon: "attach-money"
        //         }}
        //     />


        //     <Tab.Screen
        //         name="Store"
        //         component={Store}
        //         options={{
        //             tabBarIcon: "storefront"
        //         }}
        //     />

        // </Tab.Navigator>

    )
}