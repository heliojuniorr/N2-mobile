import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from 'react';
import {styles} from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

//@ts-ignore
export function NewNote({navigation}) {
    const [notes, setNotes] = useState<{id: number, description: string, title: string}[]>()
    const [code, setCode] = useState<number>()
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
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

    async function handleAddNote() {
        if(code === undefined)
            alert('Insira um código')
        else if(description === '')
            alert('Insira um descrição')
        else if(title === '') {
            alert('Insira um título')
        }
        else {
            let obj: {id: number, description: string, title: string} = {
                id: code,
                description,
                title
            };

            AsyncStorage.setItem(storageKey, JSON.stringify(notes?.concat(obj) || [obj]))
            .then(() => {
                alert('Anotação criada')
                cleanFields()
            })
            .catch(() => {
                alert('Algo deu errado')
            })

        }
    }

    function cleanFields() {
        setCode(undefined)
        setDescription('')
        setTitle('')
    }

    return (
        <View style={styles.newProductContainer}>
            <Text style={styles.title}>Cadastre produtos</Text>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <Text>Código</Text>
                    <TextInput style={styles.textBox}
                        onChangeText={(value) => setCode(Number(value))}
                        value={String(code ?? '')}
                        keyboardType='number-pad' 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Título</Text>
                    <TextInput style={styles.textBox}
                        onChangeText={(value) => setTitle(value)}
                        value={title}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text>Descrição</Text>
                    <TextInput style={styles.textBox}
                        onChangeText={(value) => setDescription(value)}
                        value={description}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleAddNote}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Home')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}