import React from 'react';
import { StyleSheet } from 'react-native';
import { 
  COLOR_TEXT,
  COLOR_BUTTON_SECONDARY,
  COLOR_BORDER,
  COLOR_WHITE,
  COLOR_IN_TRANSIT,
  COLOR_BUTTON_PRIMARY,
} from './colors'; 

export default StyleSheet.create({
  fill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLOR_WHITE,
  },
  container: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  statusContainer: {
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLOR_BORDER,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  statusSymbol: {
    height: 35,
    width: 15,
    borderRadius: 5,
    marginLeft: 15,
    backgroundColor: COLOR_IN_TRANSIT,
  },
  buttonDefault :{
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  buttonPrimary: {
    backgroundColor: COLOR_BUTTON_PRIMARY,
    elevation: 2,
    flex: 1,
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonSecondary: {
    backgroundColor: COLOR_BUTTON_SECONDARY,
    elevation: 4,
    flex: 1,
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  absoluteContianer: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
  },
  textSemiBold: {
    fontFamily: 'Proxima-Nova-Semibold',
    color: COLOR_TEXT,
    fontSize: 15,
  },
  textRegular: {
    fontFamily: 'ProximaNovaRegular',
    color: COLOR_TEXT,
    fontSize: 15,
  },
  border: {
    borderWidth: 1,
    borderColor: COLOR_BORDER,
  },
  borderRight: {
    borderRightWidth: 1,
    borderColor: COLOR_BORDER,
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: COLOR_BORDER,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: COLOR_BORDER,
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: COLOR_BORDER,
  },
  margin: {
    margin: 10,
  },
  marginRight: {
    marginRight: 10,
  },
  marginTop: {
    marginTop: 10,
  },
  marginTop30:{
    marginTop : 30,
  },
  marginTop2 : {
    marginTop : 2,
  },
  marginLeft: {
    marginLeft: 10,
  },
  marginBottom: {
    marginBottom: 10,
  },
  padding15: {
    padding: 15,
  },
  paddingTop15: {
    paddingTop: 15,
  },
  paddingRight15: {
    paddingRight: 15,
  },
  paddingBottom15: {
    paddingBottom: 15,
  },
  paddingLeft15: {
    paddingLeft: 15,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  padding10: {
    padding: 10,
  },
  padding5: {
    padding: 5,
  },
  borderRadius5: {
    borderRadius: 5,
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  fontSize12: {
    fontSize: 12,
  },
  fontItalic : {
    fontStyle : 'italic'
  },
  height50 : {
    height : 50,
  },
  marginBottom65 : {
    marginBottom : 65,
  },
  lineHeight22 : {
    lineHeight : 22,
  },
  fontSize18 : {
    fontSize : 18
  },
  width86perc : {
    width : '86%',
  },
  borderTopLeftRadius5 : {
    borderTopLeftRadius : 5,
  },
  borderBottomLeftRadius5 : {
    borderBottomLeftRadius : 5,
  },
  borderTopRightRadius5 : {
    borderTopRightRadius : 5,
  },
  borderBottomRightRadius5 : {
    borderBottomRightRadius : 5,
  },
})