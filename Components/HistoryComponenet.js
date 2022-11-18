


import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';

import { SceneMap, TabView } from 'react-native-tab-view';
import SearchHistory from './SearchHistory';
import WatchHistory from './WatchHistory';


const AdminTopNavigator = () => {
// const Tab = createMaterialTopTabNavigator();
  const layout = useWindowDimensions();

const renderScene = SceneMap({
  first: SearchHistory,
  second: WatchHistory,

});

const [index, setIndex] = useState(0);


const [routes] = useState([
  { key: 'first', title: 'SearchHistory' },
  { key: 'second', title: 'WatchHistory' },

]);

  return (

    <TabView
    navigationState={{ index, routes }}
    renderScene={renderScene}
    onIndexChange={setIndex}
    initialLayout={{ width: layout.width }}
  />
  )
}

export default AdminTopNavigator


