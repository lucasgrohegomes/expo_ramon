import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
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
            {item.imagem && <Image source={{ uri: item.imagem }}/>}
          </View>
        )}
      />
      <Pressable onPress={onAdicionar}>
        <Text>Adicionar Nova Memória</Text>
      </Pressable>
    </View>
  );
};

