import React, { Component } from 'react';
import { View } from 'react-native';

export default class BorderBox extends Component {
    render() {
        return (
            <View style={this.props.styles}>
                {this.props.children}
            </View>
        )
    }
}