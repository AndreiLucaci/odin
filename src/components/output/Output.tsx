import React, { useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { MONOKAI } from '../../types';

type OutputProps = {
  result: string;
};

export const Output: React.FC<OutputProps> = (props: OutputProps) => {
  useEffect(() => {
    monaco.editor.defineTheme('monokai', MONOKAI);
  }, []);

  return (
    <div>
      <MonacoEditor
        width="100vw"
        height="30vh"
        language="javascript"
        theme="vs-dark"
        value={props.result}
        options={{
          readOnly: true,
          renderFinalNewline: true,
          renderWhitespace: 'all',
          wordWrap: 'on',
          theme: 'monokai',
        }}
      />
    </div>
  );
};

export default Output;
