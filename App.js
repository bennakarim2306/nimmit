import React from 'react';
import { StyleSheet } from 'react-native'
import { Block } from './Components';
import Navigator from './Navigation/NavigationNew'
import Store from './Store/storeConfigurator'
import { Provider } from 'react-redux'; 


export default function App() {
  
  return (
    <Provider store={Store}>
      <Block white >
      <Navigator>
      </Navigator>
      </Block>
    </Provider>
  );
}

const styles = StyleSheet.create({})