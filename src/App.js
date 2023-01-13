import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
