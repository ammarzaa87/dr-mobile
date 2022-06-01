            
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
     
      <div className="App">
        
      <div className="container">
      <Button
              onPress={() => {navigation.replace('LoginScreen')}}
              title="Logout"
              color="#FF0000"
            />
        
        <UserCard />
        
      </div>
    </div>
    
      
    );
  
}

