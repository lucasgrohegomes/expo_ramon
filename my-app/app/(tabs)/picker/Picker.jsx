import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker'

export default Seletor = () => {
    const [ pokemon, setPokemon ] = useState('');
    const [ lista_pokemons, setListaPokemons ] = useState([])

    // const lista_pokemons = [
    //     { nome: 'Pikachu', value: 'pikachu' },
    //     { nome: 'Bulbasaur', value: 'bulbasaur'},
    //     { nome: 'Charmander', value: 'charmander'},
    //     { nome: 'Squirtle', value: 'squirtle'}
    // ]

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => response.json())
        .then(dados => setListaPokemons(dados.results))
    }, [])
    console.log('fora')

    return (
    <View>
        <Text>Selecione um Pokémon</Text>
        <Picker 
        selectedValue={pokemon}
        onValueChange={(itemValue) => setPokemon(itemValue)}>
            <Picker.Item label='selecione um Pokémon'/>
            {lista_pokemons.map((item, index) => (
                <Picker.Item key={index} label={item.name} value={item.url}/>
            ))}
            
        </Picker>
    </View>
)
}