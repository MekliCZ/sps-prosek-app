import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DashboardClass from "./Class";

const styles = StyleSheet.create({
    classificationScreen: {
        backgroundColor: '#FFFFFF',
    }
});

class DashboardContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        };
    }

    fetchData() {
        const fakeData = '{}';
    }

    componentDidMount() {
        this.fetchData();
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this.fetchData();
        this.setState({refreshing: false});
    }

    render() {
        return (
            <ScrollView style={styles.classificationScreen}>
                <DashboardClass type="Probíhá" startTime="10:55" endTime="11:40" name="Český jazyk" teacher="Mgr. Lukáš Klíma" room="N118"/>
                <DashboardClass type="Následuje" startTime="11:50" endTime="12:35" name="Webové stránky" teacher="Mgr. Dana Hájková" room="N326"/>
            </ScrollView>
        );
    }
}

const DashboardScreen = StackNavigator({
    Content: {
        screen: DashboardContent,
        navigationOptions: {
            title: 'Dashboard'
        },
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA251D',
        },
        headerTitleStyle: {
            color: '#FFFFFF',
        },
    },
});

export default DashboardScreen;