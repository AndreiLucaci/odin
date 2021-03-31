import { Layout } from 'antd';
import React, { useState } from 'react';
import { Code, Output } from '../../components';
import { codeEngine } from '../../engine';

const { Header, Footer, Content } = Layout;

export const MainPage: React.FC = () => {
  const [codeResult, setCodeResult] = useState('');

  const onRunCode = (code: string) => {
    const result = codeEngine.run(code);

    setCodeResult(result);
  };

  return (
    <>
      <Layout>
        <Header></Header>
        <Content>
          <Code onRunCode={onRunCode} />
        </Content>
        <Footer>
          <Output result={codeResult} />
        </Footer>
      </Layout>
    </>
  );
};

export default MainPage;
