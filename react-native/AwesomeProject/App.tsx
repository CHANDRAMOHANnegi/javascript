/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View } from 'react-native';
import Button from './walmart/components/button';
import { SearchComponent } from './walmart/components/Input';

export default function App() {
  return <View style={{ marginLeft: 20 }}>
    <Text>Hello</Text>
    <Button
      title="Walmart"
      onPress={() => { console.log('hello'); }}
      variant="primary"
    />
    <SearchComponent />
  </View>;
}
