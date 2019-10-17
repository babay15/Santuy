/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';
import styles from './src/assets/styles';
import MainComponent from './src/components/MainComponent';
import BottomNavigation from './src/components/BottomNavigation';

export default class App extends React.Component {
   render() {
    return (
      <View style={styles.container}> 
        <MainComponent />
        <BottomNavigation />
      </View>
    )
  }
}
