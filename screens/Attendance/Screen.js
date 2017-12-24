import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import {StackNavigator} from 'react-navigation';
import AttendanceItem from "./Item";

const styles = StyleSheet.create({
    classificationScreen: {}
});

class AttendanceContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        };
    }

    fetchData() {
        const fakeData = '{"STATUS":true,"DATA":[{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"22","TIME":"13:12"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"22","TIME":"08:03"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"21","TIME":"08:00"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"20","TIME":"08:02"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"19","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"18","TIME":"14:31"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"18","TIME":"07:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"15","TIME":"08:02"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"14","TIME":"08:02"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"13","TIME":"14:15"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"13","TIME":"08:01"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"12","TIME":"12:35"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"12","TIME":"12:34"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"12","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"11","TIME":"09:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"08","TIME":"13:38"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"08","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"07","TIME":"15:25"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"07","TIME":"12:34"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"06","TIME":"12:12"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"06","TIME":"07:58"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"05","TIME":"08:01"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"04","TIME":"12:42"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"04","TIME":"11:47"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"04","TIME":"09:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"01","TIME":"11:44"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"12","DAY":"01","TIME":"10:52"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"12","DAY":"01","TIME":"07:05"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"30","TIME":"15:26"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"30","TIME":"07:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"29","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"28","TIME":"14:32"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"28","TIME":"07:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"27","TIME":"15:23"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"27","TIME":"12:33"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"23","TIME":"12:41"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"23","TIME":"08:54"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"22","TIME":"13:55"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"22","TIME":"12:42"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"22","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"21","TIME":"12:25"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"21","TIME":"11:39"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"21","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"20","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"16","TIME":"13:46"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"16","TIME":"07:57"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"15","TIME":"14:21"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"15","TIME":"13:36"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"15","TIME":"08:01"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"14","TIME":"14:26"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"14","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"13","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"10","TIME":"07:58"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"09","TIME":"13:22"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"09","TIME":"07:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"08","TIME":"15:22"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"08","TIME":"14:21"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"08","TIME":"13:36"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"08","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"07","TIME":"07:57"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"06","TIME":"08:02"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"03","TIME":"07:02"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"02","TIME":"07:58"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"11","DAY":"01","TIME":"14:31"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"11","DAY":"01","TIME":"13:50"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"25","TIME":"13:53"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"25","TIME":"07:58"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"24","TIME":"15:22"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"24","TIME":"12:25"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"24","TIME":"11:51"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"24","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"23","TIME":"15:26"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"23","TIME":"12:53"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"23","TIME":"08:11"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"19","TIME":"08:01"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"18","TIME":"14:18"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"18","TIME":"13:32"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"18","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"17","TIME":"12:29"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"17","TIME":"08:00"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"16","TIME":"12:32"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"16","TIME":"08:00"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"13","TIME":"11:47"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"13","TIME":"10:51"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"13","TIME":"07:57"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"12","TIME":"07:58"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"11","TIME":"16:19"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"11","TIME":"14:32"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"11","TIME":"13:35"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"11","TIME":"07:59"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"10","TIME":"07:58"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"09","TIME":"13:35"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"09","TIME":"07:58"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"06","TIME":"07:53"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"05","TIME":"08:37"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"04","TIME":"14:25"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"04","TIME":"13:34"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"04","TIME":"08:54"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"03","TIME":"16:20"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"03","TIME":"12:21"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"03","TIME":"11:36"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"03","TIME":"07:59"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"10","DAY":"02","TIME":"15:25"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"02","TIME":"12:29"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"10","DAY":"02","TIME":"09:56"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"09","DAY":"27","TIME":"15:23"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"09","DAY":"27","TIME":"11:38"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"09","DAY":"27","TIME":"10:51"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"09","DAY":"27","TIME":"08:56"},{"TERMINAL":"7C1EB3010ED8","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"odchod","YEAR":"2017","MONTH":"09","DAY":"26","TIME":"13:28"},{"TERMINAL":"7C1EB3014BF2","TNAME":"hlavn\u00ed vchod","CARD":"9C61C156","ACTION":"p\u0159\u00edchod","YEAR":"2017","MONTH":"09","DAY":"26","TIME":"08:02"},{"TERMINAL":"END"}]}';
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

const AttendanceScreen = StackNavigator({
    Content: {
        screen: AttendanceContent,
        navigationOptions: {
            title: 'Docházka'
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

export default AttendanceScreen;