            
import React, { Component } from 'react';
import UserCard from "../components/userCards";
import "./styles.css";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button
} from 'react-native';
export default function ProfileCardView ({navigation}){


 

  
    return (
     
      <View className="App">
        
      <View className="container">
      <Button
              onPress={() => {navigation.replace('LoginScreen')}}
              title="Logout"
              color="#FF0000"
            />
        
        <UserCard />
        
      </View>
    </View>
    
      
    );
  
}

