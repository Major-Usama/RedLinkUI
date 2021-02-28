import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
const WIDTH = Dimensions.get('screen').width;

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = ({navigation}) => {
  const [gallery, setgallery] = useState([
    {
      title: 'Graphic Design',
      key: '1',
    },

    {
      title: 'Design Report',
      key: '2',
    },

    {
      title: 'Statics DB ',
      key: '3',
    },

    {
      title: 'Student Info',
      key: '5',
    },

    {
      title: 'Statics DB',
      key: '6',
    },

    {
      title: 'Statics DB',
      key: '7',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={gallery}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          style={{paddingHorizontal: 45}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <FontAwesome name="folder" color="#6A74C9" size={115} />
                <View style={styles.title}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Entypo name="dots-three-vertical" size={14} color="black" />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    width: WIDTH * 0.3,
    lineHeight: 15,
  },
});
export default Home;
