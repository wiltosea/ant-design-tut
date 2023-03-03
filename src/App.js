import './App.css';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import React, { useState } from 'react';
import Card from 'antd/es/card/Card';

const { Title, Text, Paragraph, Link } = Typography;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8'),
  ]),
  getItem('Files', '9', <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Title level={1}>Cards</Title>
            <Paragraph ellipsis style={{ width: 100 }}>
              Um pequeno texto para nós
            </Paragraph>
            <Row gutter={16}>
              <Col>
                <Card
                  title="Default size card"
                  extra={<Link href="#">More</Link>}
                  style={{ width: 300 }}
                >
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
              </Col>
              <Col>
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
              </Col>
              <Col>
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
              </Col>
              <Col>
                <Card
                  size="small"
                  title="Small size card"
                  extra={<a href="#">More</a>}
                  style={{ width: 300 }}
                >
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                  <p>Card Content</p>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
