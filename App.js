/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    Button
} from 'react-native';
import Contact from './Contact';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [{
                id: 'user1',
                name: 'username1',
                role: 'admin',
                mobile: '12345',
                address: 'address1'
            }, {
                id: 'user2',
                name: 'username2',
                role: 'react',
                mobile: '456789',
                address: 'address2'
            }, {
                id: 'user3',
                name: 'username3',
                role: 'php',
                mobile: '987456',
                address: 'address3'
            }],
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Contacts</Text>
                <FlatList style={{backgroundColor: 'powderblue', padding: 10}}
                          data={this.state.values}
                          // extraData={this.state.test}
                          keyExtractor={(item) => item.id}
                          renderItem={
                              ({item}) => <Contact detail={item}/>
                          }
                />
                <Button title={'Change user2'}
                        onPress={() => {
                            this.setState((previousState, props) => {
                                let users = previousState.values;
                                users[1] = {
                                    id: 'user4',
                                    name: 'username4',
                                    role: 'react-native',
                                    mobile: '456789',
                                    address: 'address4'
                                };
                                return users;
                            });
                        }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});
