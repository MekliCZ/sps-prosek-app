import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
    },
    itemTopic: {
        fontSize: 16,
    },
    itemValue: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default class ClassificationItem extends Component {
    render() {
        return (
            <View style={styles.item}>
                <View>
                    <Text style={styles.itemTopic}>{this.props.action}</Text>
                    <Text>{this.props.date}</Text>
                </View>
                <View>
                    <Text style={styles.itemValue}>{this.props.terminal}</Text>
                </View>
            </View>
        );
    }
}