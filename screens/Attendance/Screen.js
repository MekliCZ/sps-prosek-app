import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import AttendanceItem from "./Item";

const styles = StyleSheet.create({
    classificationScreen: {}
});

export default class AttendanceScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        };
    }

    fetchData() {
        const fakeData = '{"STATUS":true,"DATA":[]}';
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
                    return <AttendanceItem key={index} action={item.ACTION} terminal={item.TNAME} date={item.DAY + '.' + item.MONTH + '.' + item.YEAR + ' ' + item.TIME}/>;
                })}
            </ScrollView>
        );
    }
}