import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    classificationItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: 'center',
    },
    classificationItemTopic: {
        fontSize: 16,
    },
    classificationItemValue: {
        fontSize: 16,
        fontWeight: '600',
    },
});

export default class ClassificationItem extends Component {
    render() {
        return (
            <View style={styles.classificationItem}>
                <View>
                    <Text style={styles.classificationItemTopic}>{this.props.topic}</Text>
                    <Text>{this.props.date}</Text>
                </View>
                <View>
                    <Text style={styles.classificationItemValue}>{this.props.value}</Text>
                </View>
            </View>
        );
    }
}