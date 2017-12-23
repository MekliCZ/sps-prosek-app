import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ClassificationItem from "./Item";

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

export default class ClassificationSubject extends Component {
    constructor(props) {
        super(props);

        let classification = props.classification;
        classification.pop();

        this.state = {
            hidden: false,
            classification: classification || [],
        };
    }

    render() {
        return (
            <View style={styles.classificationSubject}>
                <View style={styles.classificationSubjectHeader}>
                    <Text style={styles.classificationSubjectHeaderName}>{this.props.name}</Text>
                    <Text>{this.props.average}</Text>
                </View>
                <View>
                    {this.state.classification.map((item, index) => {
                        return <ClassificationItem key={index} topic={this.props.topics[index]} date={this.props.dates[index]} value={item}/>;
                    })}
                </View>
            </View>
        );
    }
}