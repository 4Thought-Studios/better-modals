import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Header from 'react-navigation/src/views/Header/Header';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Home',
      headerRight: <Button title="Modal" onPress={() => navigation.navigate('Modal')}/>
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to Detail Screen" onPress={() => this.props.navigation.navigate('Detail')} />
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      title: 'Details',
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header scene={{index: 0}}
                navigation={{state: {index: 0}}}
                getScreenDetails={() => ({options: {
                  title: 'Modal',
                  headerRight: (<Button title="Close" onPress={() => this.props.navigation.goBack()} />),
                }})}/>
        <View style={styles.container}>
          <Text>Modal Screen</Text>
        </View>
      </View>
    );
  }
}

// Navigation
const MainStack = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
});
const ModalStack = StackNavigator({
  Home: { screen: MainStack },
  Modal: { screen: ModalScreen },
}, { 
  mode: 'modal', 
  headerMode: 'none',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerStyle: {
    backgroundColor: 'gray',
    shadowOpacity: 0.1,
    shadowOffset: {
        height: 3
    },
    shadowRadius: 0
  },
  headerTitleStyle: {
      color: 'white'
  },
});

export default ModalStack;