import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

interface Props {
  
  title: string; 
}

const TodoHeader: React.FC<Props> = (props) => {
  return (
    <Header style={{ backgroundColor: "white" }}>
      <Row justify="center" align="middle">
        <Col span={12}>
          <Title level={1}>{props.title}</Title>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </Header>
  );
};

export default TodoHeader;
