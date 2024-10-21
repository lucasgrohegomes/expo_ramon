import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Adiciona from './Adiciona';
import Index from './indexm';

const App = () => {
  const [telaAtual, setTelaAtual] = useState('indexm');

  const irParaAdicionar = () => setTelaAtual('adicionar');
  const voltarParaIndex = () => setTelaAtual('indexm');

  return (
    <SafeAreaView>
      {telaAtual === 'indexm' ? (
        <Index onAdicionar={irParaAdicionar} />
      ) : (
        <Adiciona onVoltar={voltarParaIndex} />
      )}
    </SafeAreaView>
  );
};

export default App;