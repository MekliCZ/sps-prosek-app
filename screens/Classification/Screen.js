import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import ClassificationSubject from "./Subject";

const styles = StyleSheet.create({
    classificationScreen: {}
});

export default class ClassificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        };
    }

    fetchData() {
        const fakeData = '{"YEAR":true,"STATUS":true,"DATA":[],"SEMESTER":"1"}';
        let responseJSON = JSON.parse(fakeData);
        responseJSON.DATA.pop();
        this.setState({
            data: responseJSON.DATA,
        });
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
            <ScrollView style={styles.classificationScreen} refreshControl={
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                />
            }>

                {this.state.data.map((item, index) => {
                    return <ClassificationSubject key={index} average={item.AVERAGE} name={item.SUBJECT} classification={item.CLASSIFICATION} dates={item.DATE} topics={item.TOPIC}/>;
                })}
            </ScrollView>
        );
    }
}