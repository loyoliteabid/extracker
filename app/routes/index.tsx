import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

// Local modules
import ManageExpense from '../screens/ManageExpense';
import RecentExpenses from '../screens/RecentExpenses';
import AllExpenses from '../screens/AllExpenses';
import Colors from '../../constants/Colors';
import IconButton from '../ui/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const headerBgColr = Colors.common.primary500;

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: headerBgColr },
        headerTintColor: Colors.dark.text,
        tabBarStyle: { backgroundColor: headerBgColr },
        tabBarActiveTintColor: Colors.common.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('manageExpense');
            }}
          />
        )
      })}>
      <BottomTabs.Screen
        name="recentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" size={size} color={color} />
        }}
      />
      <BottomTabs.Screen
        name="allExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />
        }}
      />
    </BottomTabs.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: headerBgColr },
          headerTintColor: Colors.dark.text
        }}>
        <Stack.Screen
          name="expenseOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="manageExpense"
          component={ManageExpense}
          options={{
            presentation: Platform.OS === 'ios' ? 'modal' : 'transparentModal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
