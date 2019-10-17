import {StyleSheet,} from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content:{
      flex: 1,
      backgroundColor: "white",
    },
    bottomNavigation:{
      height: 54,
      flexDirection: "row",
      backgroundColor: "white",
      borderTopWidth: 0.5,
      borderColor: "gray",
      borderTopStartRadius: 5,
      borderTopEndRadius: 5,
    },
    iconContainer:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    bottomNavigationIcons:{
      height: 25,
      width: 25,
    },
    searchBar:{
      borderWidth: 1,
      borderColor: "orange",
      borderRadius: 25,
      backgroundColor: "white",
      justifyContent: "center",
      flex: 1,
      marginLeft: 4,
      marginTop: 10,
      fontSize: 14,
      paddingLeft: 40,
      paddingRight: 40,
    },
    searchBarIcon:{
      height: 30,
      width: 30,
      top: 22,
      left: 12,
      position: "absolute"
    },
    searchBarContainer:{
      height: 64,
      position: "relative",
    },
    searchComponent: {
      marginHorizontal: 15
    },
    santuyPayContainer:{
      backgroundColor: "#D8D4D5",
      marginTop: 20,
      marginHorizontal: 15,
      borderRadius: 5,
      height: 140,
    },
    santuyPayLogoContainer:{
      height: 50,
      borderTopStartRadius: 2.9,
      borderTopEndRadius: 2.9,
      backgroundColor:"#C6C4C5",
      justifyContent: 'center'
    },
    santuyPayLogo:{
      height: 30,
      width: 150,
      left: 20,
      position: "absolute"
    },
    santuyPayMoney:{
      paddingLeft: 30,
      paddingRight: 20,
      textAlign: "right",
      fontSize: 25,
      color: "#F26822",
      fontWeight: "bold"
    },
    santuyPayMethod:{
      top: 10,
      height: 70,
      flexDirection: "row"
    },
    mainFeatureContainer: {
      top: 10,
      backgroundColor: "white",
      marginHorizontal: 10,
      borderRadius: 5,
      height: 250,
      alignItems: "center"
    },
    featureCardContainer:{
      height: 110,
      width: 400,
      backgroundColor: "white",
      flexDirection: "row",
    },
    featureCard:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: 120,
      borderRadius: 25,
  
    },
    featureCardItem:{
      flexDirection: "column",
      borderRadius: 50
    },
    mainFeatureIcons:{
      height: 75,
      width: 75,
    },
    imageSlider:{
      height: 10,
      width: 10,
    },
    sliderBoxComponent:{
      top: 10
    },
    sliderBoxContainer:{
      width: 50,
      justifyContent: "center"
    },
    santuyPayIconContainer:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    santuyPayIcons:{
      height: 35,
      width: 35,
    },
    santuyNewsContainer: {
      top: 10,
      backgroundColor: "white",
      marginHorizontal: 10,
      height: 400,
    },
    santuyNewsImageContainer:{
      borderRadius: 10,
      alignItems: "center",
      top: 5,
      position: "relative",
      marginHorizontal: 10,
    },
    santuyNewsImage:{
      height: 260,
      borderRadius: 5,
      opacity: 0.6,
    },
    santuyNewsImageLogo:{
      height: undefined,
      width: undefined,
      resizeMode: "contain",
      flex: 1,
    },
    santuyNewsImageLogoContainer:{
      height: 30,
      width: 100,
      borderRadius: 5,
      position: "absolute",
      left: 10,
      top: 5,
    },
    santuyNewsTitleContainer:{
      top: 10
    },
    santuyNewsTitle:{
      alignSelf: "flex-start",
      marginHorizontal: 7,
      fontWeight: "bold",
      fontSize: 24,
      top: 5,
    },
    santuyNewsDescription:{
      textAlign: "justify",
      marginHorizontal: 7,
      fontSize: 12,
      fontWeight: "normal",
      top: 5,
      color: "#7A7A7A"
    },
    santuyNewsButton:{
      alignSelf:"center",
      fontWeight: "bold",
      color: "white",
      fontSize: 14,
    },
    santuyNewsButtonContainer:{
      top: 15,
      marginHorizontal: 7,
      width: 50,
      height: 30,
      alignSelf: "flex-end",
      justifyContent: "center",
      backgroundColor: "#F8651D",
      borderRadius: 5,
    },
    horizontalImageContainer:{
      top: 5,
      marginHorizontal: 15,
      height: 230
    },
    lastViewedContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 30,
      top: 5,
    },
    productContainer:{
      width: 150,
      height: 150,
      borderRadius: 10,
      top: 20
    },
    productImage:{
      height: undefined,
      width: undefined,
      flex: 1,
      resizeMode: "cover",
      borderRadius: 10,
    }
  })