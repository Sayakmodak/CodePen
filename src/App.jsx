import './App.css'
import Editor from './comp/Editor'
import Output from './comp/Output'
import { useContext } from 'react'
import {globalContext} from './provider/DataProvider.jsx';
function App() {

  const {html, setHtml, css, setCss, js, setJs} = useContext(globalContext);

  return (
    <>
      <div className="main-container">
        <Editor 
        displayLang="HTML" 
        language="xml" 
        value={html} 
        onChange={setHtml}
        />

        <Editor displayLang="CSS" 
        language="css"
        value={css}
        onChange={setCss}
        />
        <Editor 
        displayLang="JavaScript" 
        language="javascript"
        value={js}
        onChange={setJs}
        />
      </div>
      <Output />
    </>
  )
}

export default App
