import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { globalContext } from '../provider/DataProvider';


const Output = () => {
  const {html, css, js} = useContext(globalContext);
  const [srcCode, setsSrcCode] = useState('');

  const code = `
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
  `;

  useEffect(()=>{
    const timeOut = setTimeout(() => {
        setsSrcCode(code);
    }, 1000);
    return ()=>{
        clearTimeout(timeOut);
    }
  }, [html, css, js])
  
  return (
    <>
      <iframe 
      srcDoc={srcCode} 
      sandbox='allow-scripts'
      height="100%"
      width="100%"
      />
    </>
  )
}

export default Output;
