import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Adiciona = ({ onVoltar }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const adicionarMemoria = async () => {
    const novaMemoria = { titulo, descricao, imagem };
    const memorias = JSON.parse(await AsyncStorage.getItem('memorias')) || [];
    memorias.push(novaMemoria);
    await AsyncStorage.setItem('memorias', JSON.stringify(memorias));
    onVoltar();
  };

  return (
    <View>
      <Text>Título:</Text>
      <TextInput
        value={titulo}
        onChangeText={setTitulo}
      />
      <Text>Descrição:</Text>
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      {imagem && <Image source={{ uri: imagem }} />}
      <Pressable onPress={adicionarMemoria}>
        <Text>Adicionar Memória</Text>
      </Pressable>
      <Pressable onPress={onVoltar}>
        <Text>Voltar</Text>
      </Pressable>
    </View>
  );
};

export default Adiciona;