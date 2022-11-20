import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    newProductContainer: {
      alignItems: 'center',
    },
    title: {
      width: '100%',
      padding: 10,
      backgroundColor: 'red',
      textAlign: 'center'
    },
    inputsContainer: {
      paddingTop: 30,
    },
    inputContainer: {
      margin: 10
    },
    textBox: {
      width: 200,
      marginTop: 5,
      backgroundColor: '#ccc'
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row'
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