import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';

export default class ScannerScreen extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    render() {


        return (
          <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{`${rowData.id} - ${rowData.title}`}</Text>}
                />
          </View>
        );
    }

    componentDidMount() {
        const { dataSource } = this.state;

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((posts) => {
                    this.setState({ dataSource: dataSource.cloneWithRows(posts) });
                });
        }, 4000);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e3240',
  },
});