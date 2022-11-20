import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    homeContainer: {
      alignItems: 'center',
    },
    title: {
      width: '100%',
      padding: 10,
      backgroundColor: 'red',
      textAlign: 'center'
    },
    buttonsContainer: {
      paddingTop: 30,
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
    }
  });