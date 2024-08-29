import React, { useState } from 'react'
import { createContext } from 'react';

export const globalContext = createContext(null);

const DataProvider = ({children}) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
  return (
    <globalContext.Provider 
    value =
    {{html, setHtml, css, setCss, js, setJs}}>

      {children}
    </globalContext.Provider>
  )
}

export default DataProvider;
