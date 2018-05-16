import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Home from './scenes/Home';
import NavigationDrawer from './components/DrawerContent';

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
import LeftMenu      from './components/LeftMenu';

type Props = {};
export default class App extends Component<Props> {
  render() {

    onPressLearnMore = () => {
      // Actions.refresh({key:"drawer"});
      Actions.refresh({key: "drawer", open: true})
    }
              // <Scene key="home" component={Home} renderLeftButton={renderMenuButton()} title="Home" initial>
          // </Scene>
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

        <Scene key="drawer" type={ActionConst.RESET} component={LeftMenu} drawer open={false} > 
          <Scene key="main" initial>  
            <Scene key="dashboard" component={Home} title="Dashboard"  /> 
          </Scene>
        </Scene>

      </Router>
    );
  }
}