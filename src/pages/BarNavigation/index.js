import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../Home'
import Money from '../Money'
import MoneyExpense from '../MoneyExpense'
import CustomTabBar from '../../components/CustomTabBar'



const Tab = createBottomTabNavigator();

export default function BarNavigation() {
 return (
      <Tab.Navigator 
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#993002',
                    borderBottomWidth: 0,

                },
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: "#FFF"
                }

            }}
            tabBar={(props) => <CustomTabBar {...props} />}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: "compare-arrows"
                }}
            />


            <Tab.Screen
                name="Money"
                component={Money}
                options={{
                    tabBarIcon: "attach-money"
                }}
            />


            <Tab.Screen
                name="MoneyExpense"
                component={MoneyExpense}
                options={{
                    tabBarIcon: "money-off"
                }}
            />

        </Tab.Navigator>
  );
}