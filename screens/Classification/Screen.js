import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, RefreshControl} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ClassificationSubject from "./Subject";

const styles = StyleSheet.create({
    classificationScreen: {
        backgroundColor: '#FFFFFF',
    },
});

class ClassificationContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: [],
        };
    }

    fetchData() {
        const fakeData = '{"YEAR":true,"STATUS":true,"DATA":[{"SUBJECT":"Anglick\u00fd jazyk","SUBJECTID":"LE","AVERAGE":"2.20","AVERAGE1":"2.20","AVERAGE2":"","Q1":"2","Q2":"","Q3":"","Q4":"","COUNT":8,"CLASSIFICATION":["2","2-","2","2","2","1","5","1","END"],"DATE":["21.09.2017","03.10.2017","11.10.2017","13.10.2017","25.10.2017","15.11.2017","28.11.2017","29.11.2017","END"],"TYPE":["","","","","","","","","END"],"TVALUE":["20","30","15","15","80","15","25","30"],"TOPIC":["U 1 Personality adjectives","Present simple X continuous - test","U1 verbs","U1 prepositoins, phrases","Quarterly Exam 1","Past simple - irregular verbs","Presentation","Past simple X continuous","END"],"TEXT":["","","","","","","","","END"],"TEACHER":["Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","Korandov\u00e1 Kamila","END"],"SEMESTER":["1","1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,false,false,"END"]},{"SUBJECT":"\u010cesk\u00fd jazyk a literatura","SUBJECTID":"T1","AVERAGE":"2.76","AVERAGE1":"2.76","AVERAGE2":"","Q1":"3","Q2":"","Q3":"","Q4":"","COUNT":7,"CLASSIFICATION":["1-","2","1","3","4","5","4","END"],"DATE":["13.09.2017","03.10.2017","06.10.2017","25.10.2017","06.11.2017","15.11.2017","01.12.2017","END"],"TYPE":["","","","","","","","END"],"TVALUE":["30","30","50","30","30","30","30"],"TOPIC":["vstupn\u00ed dikt\u00e1t","test:Teoretick\u00e9 z\u00e1klady literatury","vstupn\u00ed srovn\u00e1vac\u00ed test","test:Starov\u011bk\u00e9 orient\u00e1ln\u00ed literatury","test:V\u00fdvoj \u010cJ","test:Antick\u00e1 literatura","test:St\u0159edov\u011bk\u00e1 evropsk\u00e1 literatura","END"],"TEXT":["","","","","","","","END"],"TEACHER":["Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","Ku\u0161tov\u00e1 Martina","END"],"SEMESTER":["1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,false,"END"]},{"SUBJECT":"Elektrotechnika a elektronika","SUBJECTID":"1R","AVERAGE":"2.89","AVERAGE1":"2.89","AVERAGE2":"","Q1":"4","Q2":"","Q3":"","Q4":"","COUNT":5,"CLASSIFICATION":["5","3","N","2-","2","2-","END"],"DATE":["27.09.2017","17.10.2017","03.11.2017","21.11.2017","01.12.2017","05.12.2017","END"],"TYPE":["","","","","","","END"],"TVALUE":["15","15","20","20","20","20"],"TOPIC":["Po\u010detn\u00ed v\u00fdkony bez kalkula\u010dky","P\u0159evody jednotek","3.p\u00edsemka","P\u0159\u00edklady na el. proud, nap\u011bt\u00ed, odpor, atd.","Pr\u00e1ce v hodin\u00e1ch","5.p\u00edsemka","END"],"TEXT":["Se\u010dten\u00ed, ode\u010dten\u00ed, vyn\u00e1soben\u00ed a vyd\u011blen\u00ed 2 mal\u00fdch n\u00e1boj\u016f. \u017d\u00e1ci o obsahu p\u00edsemky p\u0159edem v\u011bd\u011bli a m\u011bli se na ni p\u0159ipravit.","\u017d\u00e1ci o obsahu p\u00edsemky p\u0159edem v\u011bd\u011bli a m\u011bli se na ni p\u0159ipravit.","Vysv\u011btlen\u00ed vzorc\u016f - proud, nap\u011bt\u00ed, odpor, vodivost, atd.","\u017d\u00e1ci o obsahu p\u00edsemky p\u0159edem v\u011bd\u011bli a m\u011bli se na ni p\u0159ipravit.","Pr\u016fb\u011b\u017en\u00e9 hodnocen\u00ed pr\u00e1ce v hodin\u00e1ch","P\u0159\u00edklady na Coulomb\u016fv z\u00e1kon","END"],"TEACHER":["Hejnal Tom\u00e1\u0161","Hejnal Tom\u00e1\u0161","Hejnal Tom\u00e1\u0161","Hejnal Tom\u00e1\u0161","Hejnal Tom\u00e1\u0161","Hejnal Tom\u00e1\u0161","END"],"SEMESTER":["1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,"END"]},{"SUBJECT":"Fyzika","SUBJECTID":"F2","AVERAGE":"2.75","AVERAGE1":"2.75","AVERAGE2":"","Q1":"","Q2":"","Q3":"","Q4":"","COUNT":2,"CLASSIFICATION":["2","3-","END"],"DATE":["04.10.2017","25.10.2017","END"],"TYPE":["","","END"],"TVALUE":["30","30"],"TOPIC":["test=jednotky","test=p.rov.p\u0159\u00edmo\u010d.","END"],"TEXT":["","","END"],"TEACHER":["\u0160vehla Vladim\u00edr","\u0160vehla Vladim\u00edr","END"],"SEMESTER":["1","1","END"],"NEW":[false,false,"END"]},{"SUBJECT":"Chemie a ekologie","SUBJECTID":"2M","AVERAGE":"1.72","AVERAGE1":"1.72","AVERAGE2":"","Q1":"2","Q2":"","Q3":"","Q4":"","COUNT":5,"CLASSIFICATION":["1","2","1-","2","2","END"],"DATE":["05.10.2017","05.10.2017","11.10.2017","23.10.2017","07.11.2017","END"],"TYPE":["","","","","","END"],"TVALUE":["30","30","15","30","30"],"TOPIC":["Chemick\u00e9 prvky - p\u00edsemn\u00fd test","Anorganick\u00e1 chemie -vzorce","Zkou\u0161en v lavici-katalyz\u00e1tory","P\u00edsemn\u00e1 prov\u011brka znalost\u00ed-chemick\u00e9 l\u00e1tky,atomy...","P\u00edsemn\u00e1 prov\u011brka znalost\u00ed-chemick\u00e9 vazby","END"],"TEXT":["","","","","","END"],"TEACHER":["\u0160imek Petr","\u0160imek Petr","\u0160imek Petr","\u0160imek Petr","\u0160imek Petr","END"],"SEMESTER":["1","1","1","1","1","END"],"NEW":[false,false,false,false,false,"END"]},{"SUBJECT":"Matematika","SUBJECTID":"2B","AVERAGE":"2.29","AVERAGE1":"2.29","AVERAGE2":"","Q1":"3","Q2":"","Q3":"","Q4":"","COUNT":10,"CLASSIFICATION":["1","N","1","1","1","3","4","2-","1","2","1-","END"],"DATE":["20.09.2017","22.09.2017","06.10.2017","06.10.2017","11.10.2017","20.10.2017","03.11.2017","10.11.2017","28.11.2017","05.12.2017","13.12.2017","END"],"TYPE":["","","","","","","","","","","","END"],"TVALUE":["20","50","20","25","20","30","80","30","20","50","20"],"TOPIC":["zlomky","Vstupn\u00edtest","intervaly I.","zlomky","intervaly II.","mocniny","1.\u010dtvrt.pr\u00e1ce","odmocniny","d\u011blen\u00ed mnoho\u010dlen\u016f","did.test","rozklady","END"],"TEXT":["","","","","","","","","","","","END"],"TEACHER":["Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","Andron\u00edkov\u00e1 Renata","END"],"SEMESTER":["1","1","1","1","1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,false,false,false,false,false,"END"]},{"SUBJECT":"N\u011bmeck\u00fd jazyk","SUBJECTID":"95","AVERAGE":"2.45","AVERAGE1":"2.45","AVERAGE2":"","Q1":"2","Q2":"","Q3":"","Q4":"","COUNT":7,"CLASSIFICATION":["3","1","2","2","3","1","5","END"],"DATE":["16.10.2017","16.10.2017","24.10.2017","06.11.2017","14.11.2017","20.11.2017","05.12.2017","END"],"TYPE":["","","","","","","","END"],"TVALUE":["25","15","25","80","25","15","25"],"TOPIC":["L1 slovn\u00ed z\u00e1soba","L1poslech","lekce 1","PP velk\u00e1","sloveso b\u00fdt, m\u00edt","L2 pr\u00e1ce s textem","L2 slovn\u00ed z\u00e1soba","END"],"TEXT":["str. 90","","p\u011btiminutovka","","p\u011btiminutovka","","p\u011btiminutovka","END"],"TEACHER":["H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","H\u00e1jkov\u00e1 Dana","END"],"SEMESTER":["1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,false,"END"]},{"SUBJECT":"Po\u010d\u00edta\u010dov\u00e1 grafika a multim\u00e9dia","SUBJECTID":"1F","AVERAGE":"1.40","AVERAGE1":"1.40","AVERAGE2":"","Q1":"1","Q2":"","Q3":"","Q4":"","COUNT":5,"CLASSIFICATION":["3","1","1","1","1","END"],"DATE":["20.10.2017","24.10.2017","01.11.2017","07.11.2017","19.12.2017","END"],"TYPE":["","","","","","END"],"TVALUE":["15","15","15","15","15"],"TOPIC":["teorie: rastrov\u00e1 a vektorov\u00e1 grafika","selekce","komiksov\u00ed hrdinov\u00e9","v\u00fdm\u011bna hlav","vrstvy","END"],"TEXT":["","","","","","END"],"TEACHER":["Vrzal Jan","Vrzal Jan","Vrzal Jan","Vrzal Jan","Vrzal Jan","END"],"SEMESTER":["1","1","1","1","1","END"],"NEW":[false,false,false,false,false,"END"]},{"SUBJECT":"Programov\u00e9 vybaven\u00ed","SUBJECTID":"0Q","AVERAGE":"1.42","AVERAGE1":"1.42","AVERAGE2":"","Q1":"1","Q2":"","Q3":"","Q4":"","COUNT":8,"CLASSIFICATION":["1-","1","2","1","1","1","3","1","END"],"DATE":["27.09.2017","27.09.2017","12.10.2017","02.11.2017","02.11.2017","22.11.2017","01.12.2017","14.12.2017","END"],"TYPE":["","","","","","","","","END"],"TVALUE":["15","15","15","15","20","15","15","15"],"TOPIC":["cvi\u010d_1","cvi\u010d_2","cvi\u010d_3","cvi\u010d_4","typy SW, malware, licence","cvi\u010d_5_PP","cvi\u010d_6","cvi\u010d_7","END"],"TEXT":["","","","","","","","","END"],"TEACHER":["Kohout Ji\u0159\u00ed","Kohout Ji\u0159\u00ed","Kohout Ji\u0159\u00ed","Kohout Ji\u0159\u00ed","Kl\u00edma Luk\u00e1\u0161","Kohout Ji\u0159\u00ed","Kohout Ji\u0159\u00ed","Kohout Ji\u0159\u00ed","END"],"SEMESTER":["1","1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,false,false,"END"]},{"SUBJECT":"Technick\u00e9 vybaven\u00ed","SUBJECTID":"0R","AVERAGE":"2.62","AVERAGE1":"2.62","AVERAGE2":"","Q1":"2","Q2":"","Q3":"","Q4":"","COUNT":5,"CLASSIFICATION":["1","4","2","1","4","END"],"DATE":["02.10.2017","09.10.2017","01.11.2017","30.11.2017","11.12.2017","END"],"TYPE":["","","","","","END"],"TVALUE":["15","15","15","5","15"],"TOPIC":["Dobrovoln\u00e1 prezentace - Abakus","Historie PC","\u010c\u00edseln\u00e9 soustavy","Prezentace","Minipo\u010d\u00edta\u010de, druhy a architektury","END"],"TEXT":["S\u010dot","","","","","END"],"TEACHER":["Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","END"],"SEMESTER":["1","1","1","1","1","END"],"NEW":[false,false,false,false,false,"END"]},{"SUBJECT":"T\u011blesn\u00e1 v\u00fdchova","SUBJECTID":"03","AVERAGE":"4.00","AVERAGE1":"4.00","AVERAGE2":"","Q1":"N","Q2":"","Q3":"","Q4":"","COUNT":1,"CLASSIFICATION":["N","4","END"],"DATE":["18.09.2017","16.10.2017","END"],"TYPE":["","","END"],"TVALUE":["15","15"],"TOPIC":["beh 60m","skok do d\u00e1lky","END"],"TEXT":["","","END"],"TEACHER":["Urban\u010d\u00edk Michal","Urban\u010d\u00edk Michal","END"],"SEMESTER":["1","1","END"],"NEW":[false,false,"END"]},{"SUBJECT":"Webov\u00e9 str\u00e1nky","SUBJECTID":"0S","AVERAGE":"1.19","AVERAGE1":"1.19","AVERAGE2":"","Q1":"1","Q2":"","Q3":"","Q4":"","COUNT":7,"CLASSIFICATION":["1-","1","1-","1","1","1","1","END"],"DATE":["27.09.2017","04.10.2017","10.10.2017","19.10.2017","23.10.2017","25.10.2017","21.12.2017","END"],"TYPE":["","","","","","","","END"],"TVALUE":["15","10","15","5","15","5","15"],"TOPIC":["Osobn\u00ed str\u00e1nka","Rozvrh - tabulka","Webov\u00e1 str\u00e1nka","aktivita v hodin\u011b","Nastylov\u00e1n\u00ed webov\u00e9 str\u00e1nky","aktivita v hodin\u011b","Stylov\u00e1n\u00ed","END"],"TEXT":["pozor na p\u00e1rovost tag\u016f, chyb\u011bj\u00edc\u00ed atributy","","title","","","","","END"],"TEACHER":["Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","Vacul\u00edk P\u0159emysl","END"],"SEMESTER":["1","1","1","1","1","1","1","END"],"NEW":[false,false,false,false,false,false,true,"END"]},{"SUBJECT":"Z\u00e1klady spole\u010densk\u00fdch v\u011bd","SUBJECTID":"SR","AVERAGE":"3.47","AVERAGE1":"3.47","AVERAGE2":"","Q1":"4","Q2":"","Q3":"","Q4":"","COUNT":4,"CLASSIFICATION":["3","4","3","4","END"],"DATE":["10.10.2017","07.11.2017","08.12.2017","15.12.2017","END"],"TYPE":["","","","","END"],"TVALUE":["50","50","40","30"],"TOPIC":["Staroorient\u00e1ln\u00ed st\u00e1ty","Franck\u00e1 \u0159\u00ed\u0161e - P\u0159emyslovci","Lucemburkov\u00e9","K\u0159\u00ed\u017eov\u00e9 v\u00fdpravy","END"],"TEXT":["test","","","","END"],"TEACHER":["Janu\u0161ov\u00e1 Martina","Janu\u0161ov\u00e1 Martina","Janu\u0161ov\u00e1 Martina","Janu\u0161ov\u00e1 Martina","END"],"SEMESTER":["1","1","1","1","END"],"NEW":[false,false,false,false,"END"]},{"SUBJECTID":"END"}],"SEMESTER":"1"}';
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

const ClassificationScreen = StackNavigator({
    Content: {
        screen: ClassificationContent,
        navigationOptions: {
            title: 'Známky'
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

export default ClassificationScreen;