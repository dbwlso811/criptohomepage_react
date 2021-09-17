import React from 'react';
import { Badge, Button, Col, Layout, Row,Select, Space, Typography, Tooltip, Grid } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import '../../style/main.scss';

import walleticonto from '../../assets/G_Wallet.svg';
import down from '../../assets/Bu_Arrow1.svg';
import Logo_pc from '../../images/layout/Logo_pc.svg';
const { Header } = Layout;
const { Option } = Select;
const { Text } = Typography;
const { useBreakpoint } = Grid;

const AppHeader = (props: { collapsed: boolean }) => {
  const { collapsed } = props;
  const screens = useBreakpoint();
  const { xs: isXs, xl: isXl } = screens;

  const handleConnectWallet = () => {
    // walletContext.handleConnectWallet();
  };

  const handleWalletReset = () => {
    // walletContext._onboard.walletReset();
  };

  const wcComponent = () => {
    return (
    <Row justify={'space-between'}>
      <Col span={'auto'}>
        <img src={Logo_pc} />
      </Col>
      <Col span={'auto'}>
        <Row style={{background:'red'}}>
          <Col>menu1</Col>
          <Col>menu1</Col>
          <Col>menu1</Col>
          <Col>menu1</Col>
        </Row>
      </Col>
      <Space style={{ marginRight: '16px' }}>
        {/*{account ? (*/}
        {/*  chainId === ChainId.MAINNET ? (<Text strong type='warning'>{toDisplayChainName(chainId)}</Text>) : (*/}
        {/*    <Text type='warning'>{toDisplayChainName(chainId)}</Text>)*/}
        {/*) : ''}*/}

        {/*{account && !!recentPendingTxs.length ? (*/}
        {/*  <Badge count={recentPendingTxs.length} style={{ marginRight: '8px' }}>*/}
        {/*    <a href={composeEtherscanLink({hash:recentPendingTxs[0]}, chainName)}*/}
        {/*       target='_blank'*/}
        {/*       rel='noreferrer'>*/}
        {/*      <Button type='dashed' loading danger>*/}
        {/*        처리중*/}
        {/*      </Button>*/}
        {/*    </a>*/}
        {/*  </Badge>*/}
        {/*) : (*/}
        {/*  <Button*/}
        {/*    icon={<img src={walleticonto} width={15} style={{ marginRight: '6px' }} alt=''/>}*/}
        {/*    onClick={handleConnectWallet}*/}
        {/*    style={{ marginLeft: '8px' }}*/}
        {/*  >*/}
        {/*    {account ? shortenAddress(account) : '지갑 연결'}<img src={down} width={12} style={{ marginLeft: '5px' }} alt=''/>*/}
        {/*  </Button>*/}
        {/*)}*/}
        {/*{account && (*/}
        {/*  <Tooltip title='연결 해제'>*/}
        {/*    <Button*/}
        {/*      onClick={handleWalletReset}*/}
        {/*      style={{ width: '38px', height: '38px', justifyContent: 'center', alignItems: 'center', display: 'flex', background: 'none' }}*/}
        {/*    >*/}
        {/*      <LogoutOutlined />*/}
        {/*    </Button>*/}
        {/*  </Tooltip>*/}

      </Space>
    </Row>
  );
  };

  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      {/*<Row>*/}
        {
          isXs ? (
              collapsed &&
              wcComponent()
            )
            :
            (
              wcComponent()
            )
        }
      {/*</Row>*/}
    </Header>
  );
};

export default AppHeader;
