import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import {
  FlatList, StyleSheet, Text, useWindowDimensions,
  View
} from 'react-native';
import { scale } from 'react-native-size-matters';
import notifications from '../../assets/data/notifications';
import NotificationItem from './NotificationItem';

const NotificationsList = () => {
  const { height } = useWindowDimensions();

  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      data={notifications}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Ionicons name="ios-lock-closed" size={20} color="#fff" />
          <Text style={styles.date}>
            {date.format('dddd, DD, MMMM')}
          </Text>
          <Text style={styles.time}>{date.format('hh:mm')}</Text>
        </View>
      )}
      renderItem={({ item, index }) => (
        <NotificationItem data={item} index={index} />
      )}
    />
  );
};

export default NotificationsList;

const styles = StyleSheet.create({
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
});
