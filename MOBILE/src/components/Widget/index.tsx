import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Widget() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#FFF'}}>Hello World!</Text>
    </View>
  );
}