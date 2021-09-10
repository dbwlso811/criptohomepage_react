import React from 'react';
// import { Link } from 'react-router-dom';
import { Layout, Menu, Space, Grid, Divider } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

// import Logo from '../../assets/Group.svg';
// import Logotext from '../../assets/Grouptext.svg';
//
// import menuldollar from '../../assets/IC_1deth_GNB_Normal_1.svg';
// import menuldollaron from '../../assets/IC_1deth_GNB_Hover_1.svg';
// import menuldollar1 from '../../assets/menu13.svg';
// import menuldollar1on from '../../assets/menu14.svg';
// import menuldollar2 from '../../assets/IC_2deth_GNB_Normal2.svg';
// import menuldollar2on from '../../assets/IC_2deth_GNB_Hover2.svg';
//
// import bankicon from '../../assets/04_menuicon38.svg'
// import bankiconon from '../../assets/04_menuicon39.svg'
// import bank1 from '../../assets/Group 1416.svg';
// import bank2 from '../../assets/Group 1417.svg';
// import bank3 from '../../assets/Group 1418.svg';
// import bank4 from '../../assets/Group 1419.svg';
// import bank5 from '../../assets/Group 1422.svg';
// import bank6 from '../../assets/Group 1423.svg';
// import bank7 from '../../assets/Group 1541.svg';
//
// import bank1on from '../../assets/Group 1424.svg';
// import bank2on from '../../assets/Group 1425.svg';
// import bank3on from '../../assets/Group 1426.svg';
// import bank4on from '../../assets/Group 1427.svg';
// import bank5on from '../../assets/Group 1428.svg';
// import bank6on from '../../assets/Group 1429.svg';
// import bank7on from '../../assets/Group 1542.svg';
//
// import swap from '../../assets/menu7.svg';
// import swapon from '../../assets/menu8.svg';
// import prize from '../../assets/menu1.svg';
// import prizeon from '../../assets/menu2.svg';
// import prizein from '../../assets/outicon1.svg';
// import prizeinon from '../../assets/outicon.svg';
// import prizeout from '../../assets/inicon1.svg';
// import prizeouton from '../../assets/inicon.svg';
// import swap1 from '../../assets/IC_2deth_GNB_Normal3.svg';
// import swap1on from '../../assets/IC_2deth_GNB_Hover3.svg';
// import swap2 from '../../assets/IC_2deth_GNB_Normal4.svg';
// import swap2on from '../../assets/IC_2deth_GNB_Hover4.svg';
// import swap3 from '../../assets/IC_2deth_GNB_Normal5.svg';
// import swap3on from '../../assets/IC_2deth_GNB_Hover5.svg';
// import poolicon from '../../assets/menu3.svg';
// import pooliconon from '../../assets/menu4.svg';
// import stakingicon from '../../assets/menu5.svg';
// import stakingiconon from '../../assets/menu6.svg';
// import stakingicon1 from '../../assets/IC_2deth_GNB_Normal6.svg';
// import stakingicon1on from '../../assets/IC_2deth_GNB_Hover6.svg';
// import stakingicon2 from '../../assets/IC_2deth_GNB_Normal7.svg';
// import stakingicon2on from '../../assets/IC_2deth_GNB_Hover7.svg';
// import settingicon from '../../assets/IC_1deth_GNB_Normal_4.svg';
// import settingiconon from '../../assets/IC_1deth_GNB_Hover_4.svg';
// import settingicon1 from '../../assets/IC_2deth_GNB_Normal8.svg';
// import settingicon1on from '../../assets/IC_2deth_GNB_Hover8.svg';
// import settingicon2 from '../../assets/criptoiconon.svg';
// import settingicon2on from '../../assets/criptoiconon2.svg';
// import { useSelectedMenu } from '../../state/application/hooks';


const { Sider } = Layout;
const { SubMenu } = Menu;
const { useBreakpoint } = Grid;


const AppMenu = (props: { collapsed: boolean, onCollapse: Function }) => {
  const { collapsed, onCollapse } = props;

  const screens = useBreakpoint();
  const { xs: isXs } = screens;

  // const [selectedMenu, setSelectedSubmenu, setSelectedIndex] = useSelectedMenu();
  // const {subMenu:selectedSubmenu, item:selectedIndex} = selectedMenu;

  return (
    // <>
    //   <Sider
    //     collapsible
    //     collapsed={collapsed}
    //     onCollapse={() => onCollapse()}
    //     breakpoint="xl"
    //     collapsedWidth={isXs ? 0 : 95}
    //     trigger={isXs &&
		// 		<div style={{ display: 'flex', margin: '20px' }}>
		// 			<MenuOutlined />
		// 		</div>
    //     }
    //     zeroWidthTriggerStyle={{ top: 0, background: 'none', color: '#4D5277' }}
    //     width={300}
    //   >
    //     <div className="logo">
    //       <Link to="/" onClick={() => {
    //         setSelectedSubmenu('');
    //         setSelectedIndex('0');
    //         isXs && onCollapse();
    //       }}>
    //         <Space align={'center'} style={{ marginLeft: '8px' }}>
    //           <img
    //             src={Logo}
    //             style={{ display: 'inline-block' }} alt="logo" />
    //           <img
    //             src={Logotext}
    //             className={'minilogo'}
    //             style={{ display: 'inline-block' }}
    //             alt=''
    //           />
    //         </Space>
    //       </Link>
    //     </div>
    //     <Menu
    //       theme="light"
    //       defaultSelectedKeys={['0']}
    //       mode="inline"
    //       openKeys={selectedSubmenu}
    //       onOpenChange={(openKeys) => {
    //         const latestOpenKey = openKeys.find(key => selectedSubmenu.indexOf(key.toString()) === -1);
    //         setSelectedSubmenu(latestOpenKey ? latestOpenKey.toString() :'');
    //       }}
    //       onSelect={({ item, key, keyPath, selectedKeys, domEvent }) => {
    //         setSelectedIndex(key.toString());
    //         isXs && onCollapse();
    //       }}>
    //

    //       <SubMenu
    //         key="archiDollar"
    //         icon={<SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='archiDollar' onIcon={menuldollaron} offIcon={menuldollar}/>}
    //         title="아키달러">
    //         <Menu.Item key="dollar-1"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='dollar-1' onIcon={menuldollar1on} offIcon={menuldollar1} /> }>
    //           <Link to="/dollar/mint">발행</Link>
    //         </Menu.Item>
    //         <Menu.Item key="dollar-2"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='dollar-2' onIcon={menuldollar2on} offIcon={menuldollar2} /> }>
    //           <Link to="/dollar/burn">소각</Link>
    //         </Menu.Item>
    //       </SubMenu>
    //
    //       {/* 아키스왑 */}
    //       <SubMenu key="archiSwap"
    //                icon={ <SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='archiSwap' onIcon={swapon} offIcon={swap}/> }
    //                title="아키스왑">
    //         <Menu.Item key="swap-1"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='swap-1' onIcon={swap1on} offIcon={swap1} /> }>
    //           <Link to="/swap">교환</Link>
    //         </Menu.Item>
    //         <Menu.Item key="swap-2"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='swap-2' onIcon={swap2on} offIcon={swap2} /> }>
    //           <Link to="/swap/add">유동성 추가</Link>

    //         <Menu.Item key="swap-3"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='swap-3' onIcon={swap3on} offIcon={swap3} /> }>
    //           <Link to="/swap/remove">유동성 제거</Link>
    //         </Menu.Item>
    //         <div style={{ width: '80%', margin: 'auto' }}>
    //           <Divider style={{ margin: 0 }} />
    //         </div>
    //         <Menu.Item key="swap-4"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='swap-4' onIcon={pooliconon} offIcon={poolicon} /> }>
    //           <Link to="/swap/pool">교환풀 현황</Link>
    //         </Menu.Item>
    //       </SubMenu>
    //
    //       {/* 아키프라이즈 */}
    //       <SubMenu key="archiPrize"
    //                icon={ <SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='archiPrize' onIcon={prizeon} offIcon={prize}/> }
    //                title="아키프라이즈">
    //         <Menu.Item key="prize-1"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='prize-1' onIcon={prizeouton} offIcon={prizeout} /> }>
    //           <Link to="/prize/deposit">예금</Link>
    //         </Menu.Item>
    //         <Menu.Item key="prize-2"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='prize-2' onIcon={prizeinon} offIcon={prizein} /> }>
    //           <Link to="/prize/withdraw">출금</Link>
    //         </Menu.Item>
    //         <div style={{ width: '80%', margin: 'auto' }}>
    //           <Divider style={{ margin: 0 }} />
    //        </div>
    //         <Menu.Item key="prize-3"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='prize-3' onIcon={pooliconon} offIcon={poolicon} /> }>
    //           <Link to="/prize/stat">상금풀 현황</Link>
    //         </Menu.Item>
    //         <div style={{width:'80%',margin:'auto'}}>
    //           <Divider style={{margin:0}}/>
    //         </div>
    //       </SubMenu>
    //
    //       {/* 예치 */}
    //       <SubMenu key="staking"
    //                icon={ <SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='staking' onIcon={stakingiconon} offIcon={stakingicon}/> }
    //                title="예치(Staking)">
    //         <Menu.Item key="staking-1"
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='staking-1' onIcon={stakingicon1on} offIcon={stakingicon1} /> }>
    //           <Link to="/staking/dollar">아키달러</Link>
    //        </Menu.Item>
    //        <Menu.Item key="staking-2">
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='staking-2' onIcon={stakingicon2on} offIcon={stakingicon2} /> }>
    //           <Link to="/staking/eth-cat">ETH/CAT Archi-LP</Link>
    //         </Menu.Item>
    //       </SubMenu>
    //
    //       {/* 아키뱅크 */}
    //       <SubMenu key='archibank'
    //                icon={ <SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='archibank' onIcon={bankiconon} offIcon={bankicon}/> }
    //                title='아키뱅크'>
    //         <Menu.Item key='bank-1'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-1' onIcon={bank1on} offIcon={bank1} /> }>
    //           <Link to='/bank/supply'>예금</Link>
    //         </Menu.Item>
    //         <Menu.Item key='bank-2'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-2' onIcon={bank2on} offIcon={bank2} /> }>
    //           <Link to='/bank/withdraw'>출금</Link>
    //         </Menu.Item>
    //         <div style={{ width: '80%', margin: 'auto' }}>
    //           <Divider style={{ margin: 0 }} />
    //         </div>
    //         <Menu.Item key='bank-3'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-3' onIcon={bank3on} offIcon={bank3} /> }>
    //           <Link to='/bank/borrow'>대출</Link>
    //         </Menu.Item>
    //         <Menu.Item key='bank-4'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-4' onIcon={bank4on} offIcon={bank4} /> }>
    //           <Link to='/bank/repay'>상환</Link>
    //         </Menu.Item>
    //         <div style={{ width: '80%', margin: 'auto' }}>
    //           <Divider style={{ margin: 0 }} />
    //         </div>
    //         <Menu.Item key='bank-5'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-5' onIcon={bank5on} offIcon={bank5} /> }>
    //           <Link to='/bank/supplyStat'>예금 현황(담보 설정)</Link>
    //         </Menu.Item>
    //         <Menu.Item key='bank-6'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-6' onIcon={bank6on} offIcon={bank6} /> }>
    //           <Link to='/bank/borrowStat'>대출 현황</Link>
    //         </Menu.Item>
    //         <div style={{width:'80%',margin:'auto'}}>
    //           <Divider style={{margin:0}}/>
    //         </div>
    //         <Menu.Item key='bank-7'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='bank-7' onIcon={bank7on} offIcon={bank7} /> }>
    //           <Link to='/bank/clearing'>청산</Link>
    //         </Menu.Item>
    //       </SubMenu>
    //
    //       {/* 기타 */}
    //       <SubMenu key="etc"
    //                icon={ <SubMenuIcon selectedSubMenu={selectedSubmenu} subMenu='etc' onIcon={settingiconon} offIcon={settingicon}/> }
    //                title="기타">
    //         <Menu.Item key='etc-1'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='etc-1' onIcon={settingicon1on} offIcon={settingicon1} /> }>
    //           <a href="https://docs.criptoarchi.finance" target="_blank" rel="noreferrer">도움말</a>
    //         </Menu.Item>
    //
    //         <Menu.Item key='etc-2'
    //                    icon={ <MenuItemIcon selectedIndex={selectedIndex} itemIndex='etc-2' onIcon={settingicon2on} offIcon={settingicon2} /> }>
    //           <a href="https://criptoarchi.com/" target="_blank" rel="noreferrer">크립토아키파이낸스</a>
    //         </Menu.Item>
    //       </SubMenu>
    //
    //     </Menu>
    //  </Sider>

    //</>
  <>

  </>
);
};

function SubMenuIcon(
  props: { selectedSubMenu: string[], subMenu: string, onIcon: string, offIcon: string }) {

  const { selectedSubMenu, subMenu, onIcon, offIcon } = props;

  return (
    <>
      {
        selectedSubMenu.includes(subMenu)
          ? <img src={onIcon} width={25} style={{ marginRight: '10px' }} alt={subMenu}/>
          : <img src={offIcon} width={25} style={{ marginRight: '10px' }} alt={subMenu}/>
      }
    </>);
}
function MenuItemIcon(
  props: { selectedIndex: string, itemIndex: string, onIcon: string, offIcon: string }) {

  const { selectedIndex, itemIndex, onIcon, offIcon } = props;

  return (
    <>
      {
        itemIndex === selectedIndex
          ? <img src={onIcon} alt='' />
          : <img src={offIcon} alt='' />
      }
    </>);
}

export default AppMenu;
