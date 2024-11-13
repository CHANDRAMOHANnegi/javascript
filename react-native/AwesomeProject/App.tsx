import * as React from 'react';
import { RootStack } from './components/navigation/stack';

const AppStack = () => {
  return (
    <RootStack />
  );
};

export default function App() {
  return <AppStack />;
}
