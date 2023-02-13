import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { scale } from 'react-native-size-matters';

export const NOTIFICATION_HEIGHT = scale(80);

const NotificationItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={data.icon} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title} numberOfLines={2}>
          {data.title}
        </Text>
        <Text>{data.subtitle}</Text>
      </View>
      <Text style={styles.time}>{data.createdAt} ago</Text>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    width: scale(320),
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#00000050',
    height: NOTIFICATION_HEIGHT - scale(10),
    margin: scale(5),
    marginHorizontal: scale(10),
    padding: scale(13),
    borderRadius: scale(20),
  },
  time: {
    color: 'lightgray',
    fontSize: scale(12),
    position: 'absolute',
    right: 10,
    top: 10,
  },
  icon: {
    width: scale(40),
    height: scale(40),
    marginRight: scale(10),
  },
  title: {
    color: 'white',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  subtitle: {
    color: 'white',
    lineHeight: 18,
    letterSpacing: 0.2,
  },
});
