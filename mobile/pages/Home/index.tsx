import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './styles';

//@ts-ignore
export function Home({navigation}) {

    function handleNavigation(route: string) {
        navigation.navigate(route)
    }

    return (
        <View style={styles.homeContainer}>
            <Text style={styles.title}>Bloco de notas do Dudu</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleNavigation('NewNote')}>
                    <Text style={styles.buttonText}>Adicionar anotação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Notes')}>
                    <Text style={styles.buttonText}>Ver anotações</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}