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

import LeftMenu      from './components/LeftMenu';

type Props = {};
export default class App extends Component<Props> {
  render() {

    

    renderMenuButton = () => {
        console.log('renderMenuButton');
        return (
            <View>
                <Button
                  onPress={onPressLearnMore}
                  title="Menu" 
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
            </View> 
        );
    }

    return (
      <Router>

        <Scene key="drawer" type={ActionConst.RESET} drawer contentComponent={LeftMenu} open={false} > 

          

          <Scene key="main" >  
            <Scene key="dashboard" component={Home} title="Dashboard"  initial /> 
          </Scene>
        </Scene>

      </Router>
    );
  }
}