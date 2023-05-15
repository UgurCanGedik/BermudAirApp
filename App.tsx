import React from 'react';
import {useFonts} from 'expo-font';
import {HomeScreen} from './screens/HomeScreen';

function App(): JSX.Element {
  useFonts({
    'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;
