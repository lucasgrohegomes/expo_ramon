import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Adiciona from './NovaMemoria';
import Index from './GaleriaMemorias';

const App = () => {
  const [telaAtual, setTelaAtual] = useState('indexm');

  const irParaAdicionar = () => setTelaAtual('adicionar');
  const voltarParaIndex = () => setTelaAtual('indexm');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {telaAtual === 'indexm' ? (
        <Index onAdicionar={irParaAdicionar} />
      ) : (
        <Adiciona onVoltar={voltarParaIndex} />
      )}
    </SafeAreaView>
  );
};

export default App;