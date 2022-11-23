import { Text, TouchableOpacity, View } from "react-native";
import { OptionsButton } from "../../components/OptionsButton";
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
                <OptionsButton onClick={() => handleNavigation('NewNote')} text={'Adicionar anotação'}/>
                <OptionsButton onClick={() => handleNavigation('Notes')} text={'Ver anotações'}/>
            </View>
        </View>
    )
}