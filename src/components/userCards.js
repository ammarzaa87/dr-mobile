import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native'
var cards = [];
const getMoviesFromApiAsync = async () => {
    
  try {
    const response = await fetch(
      'https://med-lifee.000webhostapp.com/admin/php/critical.php'
    );
    const json = await response.json();
    json.forEach((user) => {
      cards.push(
        <View className="col-md-4 animated fadeIn" key={user.id}>
        <View className="card">
          <View className="card-body">
            <View className="avatar">
              <img
                src={require('../assets/user.jpg')}
                width="150"
                height="150"
                className="card-img-top"
               
              />
            </View>
            <h5 className="card-title">
            {user.fname} {user.lname}
            </h5>
            <p className="card-up">
                        Last Update
                    <br />
                    <span className="phone">{user.time}</span>
            </p>
            <p className="card-text">
            Pressure: {user.pressure}
             
              
            </p>
            <p className="card-text">
            Diabetes: {user.diabetes}
              
              
            </p>
            <p className="card-text">
            Heart Beat: {user.heartbeat}
              <br />
              
            </p>
          </View>
        </View>
      </View>
      )
    
  })
  } catch (error) {
    console.error(error);
  }
};
getMoviesFromApiAsync();
class UserCards extends Component {
  
    
      
  render() {
    return (
      <View className="clearfix">
        <View className="row">
          
            

{cards}

          
         
        </View>
        
      </View>
    );
  }
}

export default UserCards;
