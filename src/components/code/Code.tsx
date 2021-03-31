import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { MONOKAI, CodeEngineLanguage } from '../../types';
import { Layout } from 'antd';
const { Content } = Layout;

type CodeProps = {
  onCodeUpdate: (code: string) => void;
  language: CodeEngineLanguage;
};

export const Code: React.FC<CodeProps> = (props: CodeProps) => {
  useEffect(() => {
    monaco.editor.defineTheme('monokai', MONOKAI);
  }, []);

  const [code, setCode] = useState('');

  const onChange = (newVal: string) => {
    setCode(newVal);
    props.onCodeUpdate(newVal);
  };

  const editorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    monaco.editor.setTheme('monokai');
    const range = editor.getModel()?.getFullModelRange() as monaco.Range;
    editor.focus();
    editor.setSelection(range);
    editor.focus();
  };

  return (
    <Content style={{ width: '100%', height: '100%' }}>
      <MonacoEditor
        width="100%"
        height="100%"
        language={props.language}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: true,
          },
          language: props.language,
          readOnly: false,
          renderFinalNewline: true,
          renderWhitespace: 'all',
          wordWrap: 'on',
          insertSpaces: true,
          autoIndent: 'full',
          tabSize: 2,
        }}
        value={code}
        editorDidMount={editorDidMount}
        onChange={onChange}
      />
    </Content>
  );
};

export default Code;
