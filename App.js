import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground, StyleSheet, View
} from 'react-native';
import { scale } from 'react-native-size-matters';
import wallpaper from './assets/images/wallpaper.webp';

import NotificationsList from './src/components/NotificationList';

export default function App() {


  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <StatusBar style="light" />

      {/* Notifications List  */}
      <NotificationsList

      />
      {/* Footer  */}
      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="flashlight"
            size={24}
            color="#fff"
          />
        </View>

        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={20} color="#fff" />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(250),
  },
  date: {
    fontSize: scale(20),
    fontWeight: '500',
    color: '#C3FFFE',
    marginTop: scale(20),
  },
  time: {
    fontSize: scale(82),
    fontWeight: 'bold',
    color: '#C3FFFE',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    width: '100%',
    height: scale(75),
    paddingHorizontal: scale(40),
    bottom: scale(-10),
  },
  icon: {
    width: scale(50),
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000050',
    borderRadius: scale(50),
  },
});
