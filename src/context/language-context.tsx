'use client';

import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext({
  language: 'es',
  setLanguage: (language: 'es' | 'en') => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
