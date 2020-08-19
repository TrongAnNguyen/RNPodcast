import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import HomeScreen from '../screens/home/HomeScreen';
import LibraryScreen from '../screens/library/LibraryScreen';
import DowloadScreen from '../screens/download/DownloadScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.HOME} component={HomeScreen} />
      <Tab.Screen name={routes.LIBRARY} component={LibraryScreen} />
      <Tab.Screen name={routes.DOWNLOADS} component={DowloadScreen} />
      <Tab.Screen name={routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
