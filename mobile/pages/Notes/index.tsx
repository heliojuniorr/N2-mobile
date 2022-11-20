import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles} from './styles';
import { Note } from "../../components/Note";

//@ts-ignore
export function Notes({navigation}) {
    const [notes, setNotes] = useState<{id: number, description: string, title: string}[]>()
    const storageKey = "@notes"

    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        let objString = await AsyncStorage.getItem(storageKey);
        if (objString != null) {
            let obj = JSON.parse(objString);
            setNotes(obj);
        } else {
            setNotes([]);
        }
    }

    function handleNavigation(route: string) {
        navigation.navigate(route)
    }

    async function handleRemove(id: number) {
        AsyncStorage.setItem(storageKey, JSON.stringify(notes?.filter(note => note.id !== id)))
            .then(() => {
                alert('Anotação deletada')
            })
            .catch(() => {
                alert('Algo deu errado')
            })
        
        setNotes(notes?.filter(note => note.id !== id))
    }

    return (
        <View style={styles.newOrderContainer}>
            <Text style={styles.title}>Suas anotações</Text>

            <ScrollView style={styles.productsContainer}>
                {
                    notes?.map((value, index) => (
                        <Note description={value.description} title={value.title} id={value.id} key={value.id} onRemove={handleRemove}/>
                    ))
                }
            </ScrollView>

            <View>
                <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Home')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}