import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function indexm ({ onAdicionar }) {
  const [memorias, setMemorias] = useState([]);

  const carregarMemorias = async () => {
    const memoriasSalvas = JSON.parse(await AsyncStorage.getItem('memorias')) || [];
    setMemorias(memoriasSalvas);
  };

  useEffect(() => {
    carregarMemorias();
  }, []);

  return (
    <View>
      <FlatList
        data={memorias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            {item.imagem && <Image source={{ uri: item.imagem }} style={styles.image} />}
          </View>
        )}
      />
      <Pressable onPress={onAdicionar} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar Nova Memória</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
  },
});