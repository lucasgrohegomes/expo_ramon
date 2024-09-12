import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('');
    const [listaPokemons, setListaPokemons] = useState([]);
    const [listaTipos, setListaTipos] = useState([]);
    const [tipoSelecionado, setTipoSelecionado] = useState('');

    useEffect(() => {
        // Fetch tipos de Pokémon
        fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(dados => setListaTipos(dados.results));
        
        // Fetch Pokémon com limite configurável
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(dados => setListaPokemons(dados.results));
    }, []);

    useEffect(() => {
        if (tipoSelecionado) {
            // Fetch Pokémon do tipo selecionado
            fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`)
                .then(response => response.json())
                .then(dados => setListaPokemons(dados.pokemon.map(p => p.pokemon)));
        } else {
            // Re-fetch todos os Pokémon se nenhum tipo for selecionado
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
                .then(response => response.json())
                .then(dados => setListaPokemons(dados.results));
        }
    }, [tipoSelecionado]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecione um Tipo de Pokémon</Text>
            <Picker
                selectedValue={tipoSelecionado}
                onValueChange={(itemValue) => setTipoSelecionado(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label='Selecione um Tipo' value='' />
                {listaTipos.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.name} />
                ))}
            </Picker>

            <Text style={styles.title}>Selecione um Pokémon</Text>
            <Picker
                selectedValue={pokemon}
                onValueChange={(itemValue) => setPokemon(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label='Selecione um Pokémon' value='' />
                {listaPokemons.map((item, index) => (
                    <Picker.Item key={index} label={item.name} value={item.url} />
                ))}
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 12,
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
    }
});
