import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
  Image,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';
import InboxFlatList from '../components/InboxFlatList';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#EFF2F9"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={styles.leftmenu}>
          <Feather name="menu" size={38} color={'#5B67BD'} />
          <Text style={styles.drive}>Drive</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../images/profile.jpeg')}
        />
      </View>

      <Text style={styles.storage}>Storage</Text>

      <View style={styles.topCard}>
        <ProgressCircle
          percent={75}
          radius={45}
          borderWidth={8}
          color="#6A74C9"
          shadowColor="#C4C4C4"
          bgColor="#fff">
          <Text style={styles.percentage}>{'65%'}</Text>
        </ProgressCircle>

        <View style={styles.cardStorage}>
          <Text
            style={{
              ...styles.storage,
              fontSize: 32,
              textAlign: 'left',
              marginLeft: 0,
            }}>
            Storage
          </Text>
          <Text style={styles.usedGB}>Used 9.6 GB/15GB Total</Text>
        </View>
      </View>

      <View style={styles.inboxContainer}>
        <Text style={{...styles.storage, marginTop: 0, marginLeft: 0}}>
          Inbox
        </Text>
        <Feather name="menu" size={28} color={'#9A9A9A'} />
      </View>

      <InboxFlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#EFF2F9',
  },

  drive: {
    color: '#5B67BD',
    fontSize: 38,
    fontWeight: 'bold',
    marginLeft: WIDTH / 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: HEIGHT * 0.03,
  },

  leftmenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  image: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  storage: {
    marginLeft: WIDTH / 12,
    fontWeight: 'bold',
    fontSize: 26,
    marginTop: HEIGHT / 30,
  },

  topCard: {
    width: WIDTH - 50,
    height: HEIGHT / 7,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: HEIGHT * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },

  cardStorage: {
    marginBottom: 30,
    marginLeft: 20,
  },

  usedGB: {
    color: '#6A74C9',
    fontSize: 16,
    lineHeight: 30,
  },

  percentage: {
    fontSize: 24,
    color: '#6A74C9',
  },

  inboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 35,
  },
});
