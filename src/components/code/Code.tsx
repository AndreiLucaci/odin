import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { MONOKAI } from '../../types';

type CodeProps = {
  onRunCode: (code: string) => void;
};

export const Code: React.FC<CodeProps> = (props: CodeProps) => {
  useEffect(() => {
    monaco.editor.defineTheme('monokai', MONOKAI);
  }, []);

  const [code, setCode] = useState('');

  const onChange = (newVal: string) => {
    setCode(newVal);
    props.onRunCode(newVal);
  };

  const editorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.focus();
  };

  return (
    <div>
      <MonacoEditor
        width="100vw"
        height="70vh"
        language="javascript"
        theme="vs-dark"
        options={{
          minimap: {
            enabled: true,
          },
          language: 'javascript',
          readOnly: false,
          renderFinalNewline: true,
          renderWhitespace: 'all',
          wordWrap: 'on',
          theme: 'monokai',
        }}
        value={code}
        editorDidMount={editorDidMount}
        onChange={onChange}
      />
    </div>
  );
};

export default Code;
