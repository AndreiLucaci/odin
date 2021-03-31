import { Layout, Button, Dropdown, Row, Col, Menu } from 'antd';
import React, { useState } from 'react';
import { Code, Output } from '../../components';
import { codeEngine } from '../../engine';
import { CodeEngineLanguage } from '../../types';

const { Header, Footer, Content } = Layout;

export const MainPage: React.FC = () => {
  const [language, setLanguage] = useState(CodeEngineLanguage.JAVASCRIPT);
  const [codeResult, setCodeResult] = useState('');
  const [inputCode, setInputCode] = useState('');

  const onCodeRun = () => {
    const result = codeEngine.run(inputCode, language);

    setCodeResult(result);
  };

  const onCodeUpdate = (code: string) => {
    setInputCode(code);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={() => setLanguage(CodeEngineLanguage.JAVASCRIPT)}>
          {CodeEngineLanguage.JAVASCRIPT}
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={() => setLanguage(CodeEngineLanguage.TYPESCRIPT)}>
          {CodeEngineLanguage.TYPESCRIPT}
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row style={{ height: '100%', width: '100%' }}>
      <Row style={{ height: '7vh' }}>
        <Row>
          <Col span={12}>
            <Button type="primary" onClick={onCodeRun}>
              Run the code
            </Button>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>{language}</Button>
            </Dropdown>
          </Col>
        </Row>
      </Row>
      <Row style={{ height: '60vh', width: '100%' }}>
        <Code onCodeUpdate={onCodeUpdate} language={language} />
      </Row>
      <Row style={{ height: '30vh', width: '100%' }}>
        <Output result={codeResult} />
      </Row>
    </Row>
  );
};

export default MainPage;
