// import React, { Component } from "react";
// import { Text, View } from "react-native";
// import {
//     Accelerometer
//   } from 'expo-sensors';


// class RNSensorOutput extends Component{
//   render() {


//     return (
//       <View >
//         <Text>KAKA</Text>
//       </View>
//     );
//   }
// }

// export default RNSensorOutput;

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export default function RNSensorOutput() {
  const [data, setData] = useState({});

  useEffect(() => {
    _toggle();
  }, []);

//   useEffect(() => {
//     return () => {
//       _unsubscribe();
//     };
//   }, []);

  const _toggle = () => {
    
    const subscription = Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      });
  };

  
  let { x, y, z } = data;
  return (
     
    <View >
      
      <Text>
        x: {x} y: {y} z: {z}
      </Text>
      <View>
        <TouchableOpacity onPress={_toggle} />
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}