import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class ManifestListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.manifestIdView}>
          <Text style={[styles.textContent, { textDecorationLine: 'underline' }]}>MANIFEST ID: </Text>
          <Text style={[styles.textValue, { textDecorationLine: 'underline' }]}>FG2974D1ST627</Text>
        </View>
        <View style={styles.optionsView}>
          <View style={{ width: '40%' }}>
            <View style={styles.statusContainer}>
              <View style={{ height: 60, padding: 10, width: '80%' }}>
                <Text style={styles.statusLabel}>STATUS</Text>
                <Text style={[styles.statusLabel, { fontWeight: 'bold' }]}>IN TRANSIT</Text>
              </View>
              <View style={styles.statusIndicator}>
              </View>
            </View>
            <View style={{ height: 60, padding: 10 }}>
              <Text style={styles.textContent}>PACKAGES</Text>
              <Text style={styles.textValue}>3</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: 'row', height: 60 }}>
              <View style={{ width: '35%', padding: 10 }}>
                <Text style={styles.textContent}>ORDERS</Text>
                <Text style={styles.textValue}>4</Text>
              </View>
              <View style={{ width: '50%', paddingTop: 10 }}>
                <Text style={styles.textContent}>TIEMSTAMP</Text>
                <Text style={styles.textValue}>4/6/2016</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: 60 }}>
              <View style={{ width: '35%', padding: 10 }}>
                <Text style={styles.textContent}>WEIGHT</Text>
                <Text style={styles.textValue}>8610 lbs</Text>
              </View>
              <View style={{ width: '50%', paddingTop: 10 }}>
                <Text style={styles.textContent}>VOLUME</Text>
                <Text style={styles.textValue}>675 cm3</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.touchableView}>
          <TouchableOpacity style={styles.touchableStyle} >
            <View>
              <Text style={[styles.touchableTextStyle, { color: '#E5E5E5' }]}>LOADED</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, { backgroundColor: '#EFEFEF' }]}
            onPress={() => { this.props.properties.navigation.navigate('Map') }}>
            <Text style={[styles.touchableTextStyle, { color: '#554D7A' }]}>MAP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchableStyle, { backgroundColor: '#554D7A' }]}>
            <Text style={[styles.touchableTextStyle, { color: '#FFFFFF' }]}>ORDER LIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 5,
    width: '95%',
    marginBottom: 5,
    marginTop: 5
  },
  manifestIdView: {
    height: 40,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    alignItems: 'center',
    padding: 10
  },
  textContent: {
    fontSize: 16,
    color: '#000000'
  },
  textValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold'
  },
  optionsView: {
    height: 140,
    width: '90%',
    flexDirection: 'row',
    borderTopColor: '#FFFFFF',
    alignSelf: 'center'
  },
  touchableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    margin: 10
  },
  touchableStyle: {
    height: 70,
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5
  },
  touchableTextStyle: {
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  statusIndicator: {
    backgroundColor: '#554D7A',
    height: 40,
    width: '10%',
    marginTop: 10,
    borderRadius: 5
  },
  statusContainer: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center'
  },
  statusLabel: {
    fontSize: 14,
    color: '#000000'
  },
});
