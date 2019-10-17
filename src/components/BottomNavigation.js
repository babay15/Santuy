import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
import styles from '../assets/styles';

export default class BottomNavigation extends React.Component{
    render(){
        return(
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{alignItems: "center"}}>
              <Image style={styles.bottomNavigationIcons} source={require("../assets/active-icons/Shop.png")}></Image>
              <Text style={{fontSize:11, color: "orange", paddingTop: 4}}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{alignItems: "center"}}>
              <Image style={styles.bottomNavigationIcons} source={require("../assets/non-active-icons/Cart.png")}></Image>
              <Text style={{fontSize:11, paddingTop: 4}}>Cart</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{alignItems: "center"}}>
              <Image style={styles.bottomNavigationIcons} source={require("../assets/non-active-icons/Help.png")}></Image>
              <Text style={{fontSize:11, paddingTop: 4}}>Help</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{alignItems: "center"}}>
              <Image style={styles.bottomNavigationIcons} source={require("../assets/non-active-icons/Payment.png")}></Image>
              <Text style={{fontSize:11, paddingTop: 4}}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <View style={{alignItems: "center"}}>
              <Image style={styles.bottomNavigationIcons} source={require("../assets/non-active-icons/CreditCard.png")}></Image>
              <Text style={{fontSize:11, paddingTop: 4}}>Account</Text>
            </View>           
          </TouchableOpacity>
        </View>
        )
    }
}