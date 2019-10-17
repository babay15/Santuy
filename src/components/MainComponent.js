import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
import styles from '../assets/styles';

export default class MainComponent extends React.Component {
    render(){
        return(
            // FLEX INI PENTING UNTUK MEMBUNGKUS SETIAP KOMPONEN YANG AKAN DIPANGGIL
            <View style={{flex: 1}}> 
               <ScrollView style={styles.content}>
                    <View>
                        {/* Search Bar */}
                        <View style={styles.searchComponent}>
                        <View style={styles.searchBarContainer}>
                            <TextInput placeholder="What are you looking for?" style={styles.searchBar}/>
                            <Image style={styles.searchBarIcon} source={require("../assets/active-icons/Magnifier.png")}></Image>
                        </View>
                        </View>

                        {/* Santuy Pay Component */}
                        <View style={styles.santuyPayContainer}>
                            <View style={styles.santuyPayLogoContainer}>
                            <Image style={styles.santuyPayLogo} source={require("../assets/logos/wallet-filled-money-tool.png")}></Image>
                            <Text style={styles.santuyPayMoney}>Rp. 50.000</Text>
                            </View>
                            <View style={styles.santuyPayMethod}>
                            <TouchableOpacity style={styles.santuyPayIconContainer}>
                                <View>
                                <Image style={styles.santuyPayIcons} source={require("../assets/active-icons/Pay.png")}></Image>
                                <Text style={{fontSize:12, paddingTop: 4, fontWeight: "bold"}}>Pay</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.santuyPayIconContainer}>
                                <View>
                                <Image style={styles.santuyPayIcons} source={require("../assets/active-icons/Top-Up.png")}></Image>
                                <Text style={{fontSize:12, paddingTop: 4, fontWeight: "bold"}}>Top-Up</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.santuyPayIconContainer}>
                                <View>
                                <Image style={styles.santuyPayIcons} source={require("../assets/active-icons/Transfer.png")}></Image>
                                <Text style={{fontSize:12, paddingTop: 4, fontWeight: "bold"}}>Transfer</Text>
                                </View>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Main Feature */}
                    <View style={styles.mainFeatureContainer}>
                        {/* Row 1 */}
                        <View style={styles.featureCardContainer}>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/ShopBag.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Santuy Mall</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/Discount.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Mobile Recharge</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/Sale2.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Fashion</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>

                        {/* Row 2 */}
                        <View style={styles.featureCardContainer}>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/Cart2.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Orders</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/Prize.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Prize</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.featureCard}>
                            <View>
                                <View style={styles.featureCardItem}>
                                <Image style={styles.mainFeatureIcons} source={require("../assets/active-icons/Delivery.png")}></Image>
                                <Text style={{fontSize:10, paddingTop: 4, alignSelf: "center", fontWeight: "bold"}}>Delivery</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{height: 17, backgroundColor: "#F2F2F4"}}></View>

                    {/* Horizontal Scroll */}

                    <View style={styles.horizontalImageContainer}>
                        <View style={styles.lastViewedContainer}>
                            <Text style={{fontSize: 18, fontWeight: "bold", color: "#1c1c1c", }}>Last Viewed</Text>
                        </View>
                        <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                            <View style={{marginRight: 16, bottom: 15}}>
                                <TouchableOpacity style={styles.productContainer}>
                                    <Image style={styles.productImage} source={require("../assets/news/barang4.jpg")} ></Image>
                                </TouchableOpacity>
                                <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c", top: 20}}> Realme 5 Pro </Text>
                            </View>
                            <View style={{marginRight: 16, bottom: 15}}>
                                <TouchableOpacity style={styles.productContainer}>
                                    <Image style={styles.productImage} source={require("../assets/news/barang2.jpg")} ></Image>
                                </TouchableOpacity>
                                <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c", top: 20}}> Google Pixel 3a </Text>
                            </View>
                            <View style={{marginRight: 16, bottom: 15}}>
                                <TouchableOpacity style={styles.productContainer}>
                                    <Image style={styles.productImage} source={require("../assets/news/barang5.jpg")} ></Image>
                                </TouchableOpacity>
                                <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c", top: 20}}> Dimsum Isi 50 </Text>
                            </View>
                            <View style={{marginRight: 16, bottom: 15}}>
                                <TouchableOpacity style={styles.productContainer}>
                                    <Image style={styles.productImage} source={require("../assets/news/barang1.jpg")} ></Image>
                                </TouchableOpacity>
                                <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c", top: 20}}> Nintendo Switch </Text>
                            </View>
                            <View style={{marginRight: 16, bottom: 15}}>
                                <TouchableOpacity style={styles.productContainer}>
                                    <Image style={styles.productImage} source={require("../assets/news/barang3.jpg")} ></Image>
                                </TouchableOpacity>
                                <Text style={{fontSize: 16, fontWeight: "bold", color: "#1c1c1c", top: 20}}> Xbox One Controller </Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{height: 17, backgroundColor: "#F2F2F4"}}></View>

                    {/* Santuy News 1 */}

                    <View style={styles.santuyNewsContainer}>
                        <View style={styles.santuyNewsImageContainer}>
                            <Image style={styles.santuyNewsImage} source={require("../assets/news/toilet1a.jpg")} resizeMode="contain"></Image>
                            <View style={styles.santuyNewsImageLogoContainer}>
                                <Image style={styles.santuyNewsImageLogo} source={require("../assets/logos/santuyNews.png")} resizeMode="contain"></Image>  
                            </View>
                        </View>
                        <View style={styles.santuyNewsTitleContainer}>
                            <Text style={styles.santuyNewsTitle}>Makan Di WC</Text>
                            <Text style={styles.santuyNewsDescription}>Eh buset dah?! Bocah bukannya makan di mangkok malah makan di WC, bocah ngapa yak? Bocah ngapa yak? Bocah ngapa yak?</Text>
                            <TouchableOpacity>
                                <View style={styles.santuyNewsButtonContainer}>
                                <Text style={styles.santuyNewsButton}> Read </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{height: 17, backgroundColor: "#F2F2F4"}}></View>

                    {/* Santuy News 2 */}

                    <View style={styles.santuyNewsContainer}>
                        <View style={styles.santuyNewsImageContainer}>
                            <Image style={styles.santuyNewsImage} source={require("../assets/news/gorilla.jpg")} resizeMode="contain"></Image>
                            <View style={styles.santuyNewsImageLogoContainer}>
                                <Image style={styles.santuyNewsImageLogo} source={require("../assets/logos/santuyNews.png")} resizeMode="contain"></Image>              
                            </View>
                        </View>
                        <View style={styles.santuyNewsTitleContainer}>
                            <Text style={styles.santuyNewsTitle}>Gorilla Udah Bisa Joget</Text>
                            <Text style={styles.santuyNewsDescription}>Eh buset dah?! Gorilla udah pada bisa joget, bocah aja belom bisa. Bocah ngapa yak? Bocah ngapa yak? Bocah ngapa yak?</Text>
                            <TouchableOpacity>
                                <View style={styles.santuyNewsButtonContainer}>
                                <Text style={styles.santuyNewsButton}> Read </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        )
    }
    }
        