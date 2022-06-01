import React, { Component } from "react";
import { Image, StyleSheet } from 'react-native'
var cards = [];
const getMoviesFromApiAsync = async () => {
    
  try {
    const response = await fetch(
      'http://localhost/MedLife/admin/php/critical.php'
    );
    const json = await response.json();
    json.forEach((user) => {
      cards.push(
        <div className="col-md-4 animated fadeIn" key={user.id}>
        <div className="card">
          <div className="card-body">
            <div className="avatar">
              <img
                src={require('../assets/user.jpg')}
                width="150"
                height="150"
                className="card-img-top"
               
              />
            </div>
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
              <br />
              
            </p>
            <p className="card-text">
            Diabetes: {user.diabetes}
              <br />
              
            </p>
            <p className="card-text">
            Heart Beat: {user.heartbeat}
              <br />
              
            </p>
          </div>
        </div>
      </div>
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
      <div className="clearfix">
        <div className="row">
          
            

{cards}

          
         
        </div>
        
      </div>
    );
  }
}

export default UserCards;
