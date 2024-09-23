// LancheContext.js
import React, { createContext, useState } from 'react';

const LancheContext = createContext();

export const LancheProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (lanche) => {
        setCarrinho((prev) => [...prev, lanche]);
    };

    return (
        <LancheContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
            {children}
        </LancheContext.Provider>
    );
};

export const useLanche = () => {
    return React.useContext(LancheContext);
};
