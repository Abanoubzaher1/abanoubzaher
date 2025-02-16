import type React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

import LoginScreen from "../screens/LoginScreen"
import DashboardScreen from "../screens/DashboardScreen"
import MapScreen from "../screens/MapScreen"
import AnalyticsScreen from "../screens/AnalyticsScreen"
import MaintenanceScheduleScreen from "../screens/MaintenanceScheduleScreen"
import SupportChatScreen from "../screens/SupportChatScreen"
import SettingsScreen from "../screens/SettingsScreen"
import CustomerAppScreen from "../screens/CustomerAppScreen"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    <Tab.Screen name="Maintenance" component={MaintenanceScheduleScreen} />
    <Tab.Screen name="Support" component={SupportChatScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

const AppNavigator: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const userRole = useSelector((state: RootState) => state.auth.role)

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      ) : userRole === "customer" ? (
        <Stack.Screen name="CustomerApp" component={CustomerAppScreen} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator

