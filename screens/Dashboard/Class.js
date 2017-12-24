import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DashboardItem from './Item';

const styles = StyleSheet.create({
    classificationSubject: {

    },
    classificationSubjectHeader: {
        backgroundColor: '#e9e9e9',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    classificationSubjectHeaderName: {
        color: '#000000',
        fontSize: 19,
    },
    classificationSubjectHeaderAverage: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});

export default class DashboardClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: false,
        };
    }

    render() {
        return (
            <View style={styles.classificationSubject}>
                <View style={styles.classificationSubjectHeader}>
                    <Text style={styles.classificationSubjectHeaderName}>{this.props.type}</Text>
                    <Text>{this.props.startTime} - {this.props.endTime}</Text>
                </View>
                <View>
                    <DashboardItem name={this.props.name} teacher={this.props.teacher} room={this.props.room}/>
                </View>
            </View>
        );
    }
}