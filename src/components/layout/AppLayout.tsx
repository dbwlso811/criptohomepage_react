import React, { useState } from 'react';
import { Grid, Layout } from 'antd';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import AppMenu from './AppMenu';
import AppRoute from './AppRoute';

import 'antd/dist/antd.css';
import './AppLayout.css';

const { useBreakpoint } = Grid;

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const screens = useBreakpoint();
  const { xs: isXs } = screens;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppMenu
        collapsed={collapsed}
        onCollapse={onCollapse}
      />
      <Layout className='site-layout'>
        <AppHeader
          collapsed={collapsed}
        />
        {
          isXs ?
            (
              collapsed &&
							<div className={'container_style'}>
								<AppRoute />
								<AppFooter />
							</div>
            )
            :
            (
              <div className={'container_style'}>
                <AppRoute />
                <AppFooter />
              </div>
            )
        }
      </Layout>
    </Layout>
  );
};


export default AppLayout;
