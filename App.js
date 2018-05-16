import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Home from './scenes/Home';

import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import DrawerContent from './components/DrawerContent';


type Props = {};
export default class App extends Component<Props> {
  render() {

    renderMenuButton = () => {
        console.log('renderMenuButton');
        return (
            <View>
                <Button
                  // onPress={onPressLearnMore}
                  title="Menu" 
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
            </View> 
        );
    }

    return (
      <Router>

        <Stack key="root">
          <Scene key="home" component={Home} renderLeftButton={renderMenuButton()} />
          <Scene 
            key="drawer"
            component={DrawerContent}
            type={ActionConst.REPLACE}
            
            
            onLeft={()=> {console.log('ddd');}}
            
            leftTitle='dd'
            >
                
          </Scene>
       
        </Stack>
      </Router>
    );
  }
}