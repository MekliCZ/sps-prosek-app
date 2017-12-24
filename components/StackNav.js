import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

const StackNav = StackNavigator({
    Content: {
        screen: this.props.screen,
        navigationOptions: {
            title: this.props.name
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

export default StackNav;