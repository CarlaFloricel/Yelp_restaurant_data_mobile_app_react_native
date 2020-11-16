Carla Floricel

This app was developed using React Native.
It uses Yelp data (jsons consisting of details about restaurants: https://biz.yelp.com/ ) and it searches for restaurants based on the input from the user (dishes names).
I followed a udemy tutorial for developing the app without sensor data (The Complete React Native + Hooks Course [2020 Edition] by Stephen Grider: https://www.udemy.com/course/the-complete-react-native-and-redux-course/)
After that I tried incorporating sensor data using react-native-sensors: https://react-native-sensors.github.io/docs/API.html but I failed.
So the next try was using expo-sensors since my app is also developed using Expo: https://docs.expo.io/versions/latest/sdk/sensors/ .
Once the project is downloaded on a local machine, it needs node to run using node inside the 'rn-starter' folder : npm install and then npm start.
I useed the bach terminal from Visual Studio to run the app (using the Git Bash terminal in Windows did not work).
For the phone, the Expo app is needed in order to scan the QR code provided by the app and make it work on mobile too (details in the video).
Video is in the project folder under the name "video".