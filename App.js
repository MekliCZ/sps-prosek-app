import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import ClassificationScreen from "./screens/Classification/Screen";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or pressnu button for dev menu',
});

class TodoScreen extends Component {
    render() {
        return (
            <Text>TODO</Text>
        );
    }
}

const DrawerNavigatorScreens = {
    Dashboard: {
        screen: TodoScreen,
        navigationOptions: {
            drawerLabel: 'Dashboard',
        }
    },
    Timetables: {
        screen: TodoScreen,
        navigationOptions: {
            drawerLabel: 'Rozvrhy',
        }
    },
    Classification: {
        screen: ClassificationScreen,
        navigationOptions: {
            drawerLabel: 'Známky',
        }
    },
    Attendance: {
        screen: TodoScreen,
        navigationOptions: {
            drawerLabel: 'Docházka',
        }
    },
    Settings: {
        screen: TodoScreen,
        navigationOptions: {
            drawerLabel: 'Nastavení',
        }
    },
    About: {
        screen: TodoScreen,
        navigationOptions: {
            drawerLabel: 'O aplikaci',
        }
    },
};

const DrawerNavigatorSettings = {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: '#DA251D'
    }
};

const App = DrawerNavigator(DrawerNavigatorScreens, DrawerNavigatorSettings);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
