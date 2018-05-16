import React                    from 'react';
import {View, Text, StyleSheet,Modal,TouchableHighlight,Button} from "react-native";
// import Button                   from "react-native-button";
import {Actions}                from "react-native-router-flux";

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});

class Home extends React.Component {
    state = {
        modalVisible: false,
      };

      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    onPressAbrepopup(){
        this.setModalVisible(!this.state.modalVisible);
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Replace screen</Text>

                <Button
                  onPress={this.onPressAbrepopup.bind(this)}
                  title="Abre popup" 
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />

                 <Modal
                      animationType="slide"
                      transparent={false}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {
                        // alert('Modal has been closed.');
                      }}>
                      <View style={{marginTop: 22}}>
                        <View>
                          <Text>Hello World!</Text>

                          <TouchableHighlight
                            onPress={() => {
                              this.setModalVisible(!this.state.modalVisible);
                            }}>
                            
                            <Text>Hide Modal</Text>
                            


                          </TouchableHighlight>
                        </View>
                      </View>
                    </Modal>
            </View>
        );
    }
}

module.exports = Home;