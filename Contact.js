import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.contact}>
                <View style={{flex:3}}>
                    <Text style={styles.fields}>
                        Name:{this.props.detail.name}
                    </Text>
                    <Text style={styles.fields}>
                        Mobile:{this.props.detail.mobile}
                    </Text>
                    <Text style={styles.fields}>
                        Address:{this.props.detail.address}
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.fields}>
                        Role:{this.props.detail.role}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contact: {
        flexDirection:'row',
        backgroundColor: 'skyblue',
        borderRadius: 10,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 10,
        margin: 5
    },
    fields: {
        flex: 1,
    }
});