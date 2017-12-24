import React, {Component} from 'react';
import {Image, Platform, StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';
import {DrawerNavigator, DrawerItems, SafeAreaView} from 'react-navigation';
import DashboardScreen from "./screens/Dashboard/Screen";
import ClassificationScreen from "./screens/Classification/Screen";
import AttendanceScreen from "./screens/Attendance/Screen";

const styles = StyleSheet.create({
    drawerImage: {
        height: 100,
        width: null,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

class TodoScreen extends Component {
    render() {
        return (
            <Text>TODO</Text>
        );
    }
}

const DrawerContent = (props) => (
    <ScrollView>
        <StatusBar backgroundColor="#B41F18" barStyle="light-content"/>
        <Image resizeMode="cover" style={styles.drawerImage} source={require('./resources/images/drawer_header.png')}/>
        <DrawerItems {...props} />
    </ScrollView>
);

const DrawerNavigatorScreens = {
    Dashboard: {
        screen: DashboardScreen,
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
        screen: AttendanceScreen,
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
    contentComponent: DrawerContent,
    contentOptions: {
        activeTintColor: '#DA251D'
    }
};

const App = DrawerNavigator(DrawerNavigatorScreens, DrawerNavigatorSettings);

export default App;
