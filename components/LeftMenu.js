import React                    from 'react';
import {View, Text, StyleSheet,Button} from "react-native";
// import Button                   from "react-native-button";
import {Actions}                from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class LeftMenu extends React.Component {
    onPressPerfilMenu(){

    }
    render(){ 
        return (
           <View style={styles.container}>
                <Button
                  onPress={this.onPressPerfilMenu.bind(this)}
                  title="Perfil" 
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />


            </View>
        );
    }
}

module.exports = LeftMenu;