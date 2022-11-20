import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    newOrderContainer: {
      alignItems: 'center',
    },
    title: {
      width: '100%',
      padding: 10,
      backgroundColor: 'red',
      textAlign: 'center'
    },
    productsContainer: {
      width: '90%',
      height: '75%'
    },
    productContainer: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#66aa66',
      padding: 10,
      borderRadius: 10
    },
    productText: {
      textAlign: 'center',
    },
    button: {
      backgroundColor: '#7777ff',
      margin: 15,
      borderRadius: 8,
      padding: 10,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buttonText: {
      textAlign: 'center',
    },
    deleteButton: {
      width: 25
    },
    addButton: {
      width: 25
    },
  });