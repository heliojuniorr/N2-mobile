import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import {styles} from './styles';


export function Note(props: {id: number, description: string, title: string, onRemove: (id: number) => void}) {
    return (
        <View style={styles.productContainer}>
            <View>
                <Text style={styles.productText}>Código: {props.id}</Text>
                <Text style={styles.productText}>Título: {props.title}</Text>
                <Text style={styles.productText}>{props.description}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => props.onRemove(props.id)}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    )
}