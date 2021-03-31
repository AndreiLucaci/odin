import React, { useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { MONOKAI } from '../../types';
import { Layout } from 'antd';
const { Content } = Layout;

type OutputProps = {
  result: string;
};

export const Output: React.FC<OutputProps> = (props: OutputProps) => {
  useEffect(() => {
    monaco.editor.defineTheme('monokai', MONOKAI);
  }, []);

  const editorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monacoNamespace: typeof monaco,
  ) => {
    monacoNamespace.editor.setTheme('monokai');
  };

  return (
    <Content style={{ width: '100%', height: '100%' }}>
      <MonacoEditor
        width="100%"
        height="100%"
        language="javascript"
        theme="vs-dark"
        value={props.result}
        editorDidMount={editorDidMount}
        options={{
          readOnly: true,
          renderFinalNewline: true,
          renderWhitespace: 'all',
          wordWrap: 'on',
          theme: 'monokai',
          insertSpaces: true,
          autoIndent: 'full',
          tabSize: 2,
        }}
      />
    </Content>
  );
};

export default Output;
