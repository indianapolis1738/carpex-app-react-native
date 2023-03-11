import React, { Component, useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';




export default class Tables extends Component {



  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Coin Name', 'Price', 'Trade'],
      tableData: [
        ['1', '2', <Button title='Buy'/>],
        ['a', 'b', <Button title='Buy'/>],
        ['1', '2', <Button title='Buy'/>],
        ['a', 'b', <Button title='Buy'/>]
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table>
          <Row data={state.tableHead} style={styles.head} />
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff', margin: 6 },
  text: { margin: 6 }
});