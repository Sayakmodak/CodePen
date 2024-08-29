import React, { useState } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';


const Editor = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleOnClick = ()=>{
    setIsCollapsed(!isCollapsed);
    
  }

  const handleChange = (editor, data, value) =>{
    props.onChange(value);
  }

  return (
    <>
      <div className={isCollapsed ? "editor-containerCollapsed" : "editor-container"}>
        <div className="inner-nav">
          {props.displayLang}
          <button onClick={handleOnClick}>O/C</button>
        </div>

        
        <CodeMirror
          className='editor'
          onBeforeChange={handleChange}
          value={props.value}
          options={{
            mode: props.language,
            theme: 'material',
            lineNumbers: true,
            lint: true,
            lineWrapping:true
          }}
        />
      </div>

    </>
  )
}

export default Editor;
